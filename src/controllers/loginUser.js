import { serverURL } from "../data/server";

export async function logInUser(input) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: input.email.data,
            password: input.password.data,
        }),
    };
    const response = await fetch(
        serverURL + `api/users/login/user`,
        requestOptions
    );
    const data = await response.json();
    return data;
}