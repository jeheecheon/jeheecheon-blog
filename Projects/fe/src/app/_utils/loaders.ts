import { LoaderFunction, redirect } from "react-router-dom";
import { handleError, throwError, throwResponse } from "@/_utils/responses";
import { convertStringIntoDate } from "@/_utils/post";

export const postLoader: LoaderFunction = async ({ params }) => {
    return fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/blog/post/${params.id}`,
        {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
            },
        }
    )
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throwResponse(res);
        })
        .then((post) => {
            if (post) {
                convertStringIntoDate(post);
                return post;
            } else {
                throwError("Post is null or undefined");
            }
        })
        .catch(handleError);
};

export const aboutMeLoader: LoaderFunction = async () => {
    return fetch(
        `${
            import.meta.env.VITE_SERVER_URL
        }/api/blog/post/f9fbf7bf-0e9a-4835-9b81-c37e7edcef7a/static-like`
    )
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throwResponse(res);
        })
        .then((post) => {
            if (post) {
                convertStringIntoDate(post);
                return post;
            } else {
                throwError("Post is null or undefined");
            }
        })
        .catch(handleError);
};

export const privacyPolicyLoader: LoaderFunction = async () => {
    return fetch(
        `${
            import.meta.env.VITE_SERVER_URL
        }/api/blog/post/670e46d5-4970-4e9b-b969-4a7272209367/static-like`
    )
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throwResponse(res);
        })
        .then((post) => {
            if (post) {
                convertStringIntoDate(post);
                return post;
            } else {
                throwError("Post is null or undefined");
            }
        })
        .catch(handleError);
};

export const postEditLoader: LoaderFunction = async () => {
    return fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/admin`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
        },
    })
        .then((res) => {
            if (res.ok) {
                return null;
            } else if (res.status === 401 || res.status === 403) {
                return redirect("/asd");
            }
            handleError(res);
        })
        .catch(handleError);
};

export const postPageCntLoader: LoaderFunction = async ({
    params: { category },
}) => {
    return fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/blog/posts/page?${
            category ? `category=${category}` : ""
        }`,
        {
            method: "GET",
        }
    )
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throwResponse(res);
            }
        })
        .then((pageCnt) => {
            if (!pageCnt) {
                throwError("Page count is null or undefined");
            }
            return pageCnt;
        })
        .catch(handleError);
};
