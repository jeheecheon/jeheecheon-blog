using System.Net.Http.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Core.DTOs;
using Infrastructur.Repositories.Account;

namespace Application.Services.OAuth;

public class OAuthService : IOAuthService
{
    private static readonly string _GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";

    private readonly IConfiguration _configuration;
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IAccountRepository _accountRepository;

    ILogger<OAuthService> _logger;
    public OAuthService(
        ILogger<OAuthService> logger,
        IConfiguration configuration,
        IHttpClientFactory httpClientFactory,
        IAccountRepository accountRepository
    )
    {
        _logger = logger;
        _configuration = configuration;
        _httpClientFactory = httpClientFactory;
        _accountRepository = accountRepository;
    }

    public async Task<GoogleUserInfoResponseDto?> GoogleAuthenticateUserAsync(string code, string scope)
    {
        // Construct a redirect url to send to google to get tokens 
        var redirectUrl = _GOOGLE_TOKEN_URL +
            $"?client_id={_configuration["OAuth:Google:ClientId"]}" +
            $"&client_secret={_configuration["OAuth:Google:ClientSecret"]}" +
            $"&code={code}" +
            $"&grant_type=authorization_code" +
            $"&redirect_uri={_configuration["ClientUrls:blog"]}/oauth/google/sign-in";

        // Store http response from Google
        HttpResponseMessage httpResponseMessage = default!;

        using (var httpClient = _httpClientFactory.CreateClient())
        {
            // Send a http request to get toknes for the current user
            try
            {
                httpResponseMessage = (await httpClient.PostAsync(redirectUrl, null))
                    .EnsureSuccessStatusCode();
            }
            catch (Exception e)
            {
                _logger.LogInformation(e.Message);
                return null;
            }

            // Retract User Tokens from the body of response
            var tokensResponse = await httpResponseMessage.Content.ReadFromJsonAsync<GoogleTokensResponseDto>();

            // Check if the fecthing was successful
            if (tokensResponse is null)
            {
                _logger.LogInformation("Failed to fetch the user info.");
                return null;
            }

            // Create a http request with a auth token in it
            var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, "https://www.googleapis.com/oauth2/v2/userinfo")
            {
                Headers = {
                    { "Authorization", $"Bearer {tokensResponse.access_token}" }
                }
            };

            // Send a http request to get user info of the current user
            try
            {
                httpResponseMessage = (await httpClient.SendAsync(httpRequestMessage))
                    .EnsureSuccessStatusCode();
            }
            catch (Exception e)
            {
                _logger.LogInformation(e.Message);
                return null;
            }
        }

        // Extract a user info from the body of the response from google
        var userInfoResponse = await httpResponseMessage.Content.ReadFromJsonAsync<GoogleUserInfoResponseDto>();

        // Check if the user info is correct and has a verified email 
        if (userInfoResponse == null || string.IsNullOrWhiteSpace(userInfoResponse.email) || !userInfoResponse.verified_email)
        {
            _logger.LogInformation("User Info just fetched is null or the email is not verified.");
            return null;
        }
        else
        {
            userInfoResponse.email = userInfoResponse.email.Normalize();
            return userInfoResponse;
        }
    }

    public async Task<Guid?> RegisterUserAsync(string provider, GoogleUserInfoResponseDto userInfo)
    {
        // Try to create a user account
        await _accountRepository.AddAccountAsync(userInfo);

        // Fetch the user uuid
        Infrastructur.Models.Account? account = _accountRepository.GetAccountByNormalizedEmail(userInfo.email.ToUpper());
        if (account is null || string.IsNullOrWhiteSpace(account.NormalizedEmail))
            return null;

        // Try to update avatar url
        await _accountRepository.UpdateAvatarAsync(account.Id, userInfo.picture);

        // Fetch provider's id
        var providerInfo = _accountRepository.GetExternalLoginProviderByName(provider);
        if (providerInfo is null)
            return null;

        // Register the current user with the provider
        await _accountRepository.AddExternalAuthenticationAsync(
            providerInfo.Id, userInfo.id, account.Id);

        return account.Id;
    }
}