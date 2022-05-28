import { serverURL } from "../data/server";

export async function createUser(input) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: input.email.data,
            password: input.password.data,
            name: input.name.data,
            surname: input.surname.data,
            phone: input.phone.data,
        }),
    };
    const response = await fetch( serverURL + `api/users/`,
    requestOptions
    );
    const data = await response.json();
    return data;
  }