using Application.Services.Account;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Text.Json;

namespace WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly ILogger<AuthController> _logger;
    private readonly IAccountService _accountService;

    public AuthController(
        ILogger<AuthController> logger,
        IAccountService accountService
    )
    {
        _logger = logger;
        _accountService = accountService;
    }

    [HttpGet("sign-out")]
    public async Task<IActionResult> SignOutAsync()
    {
        await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> AuthenticationAsync()
    {
        var isAuthenticated = await _accountService.Authenticate();

        if (isAuthenticated)
        {
            return Ok(JsonSerializer.Serialize(new
            {
                email = HttpContext.User.Claims.FirstOrDefault((c) => c.Type == ClaimTypes.Email)?.Value,
                name = HttpContext.User.Claims.FirstOrDefault((c) => c.Type == ClaimTypes.Email)?.Value,
                avatar = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "avatar")?.Value
            }));
        }
        else
        {
            return Unauthorized();
        }
    }

    [HttpGet("admin")]
    // [Authorize]
    public async Task<IActionResult> AuthenticateAdmin()
    {
        var isAuthenticated = await _accountService.Authenticate();
        if (!isAuthenticated)
        {
            return Unauthorized();
        }
        return _accountService.FilterAdmin() ? Ok() : Forbid();
    }
}
