import { serverURL } from "../data/server";

export async function createOrder(input,products,token) {
    const auth = token && `JWT ${token}`
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: auth ,
        },
        body: JSON.stringify({
            email: input.email.data,
            password: input.password.data,
            name: input.name.data,
            surname: input.surname.data,
            phone: input.phone.data,
            products: products,
        }),
    };
    const response = await fetch( serverURL + `api/orders/`,
    requestOptions
    );
    const data = await response.json();
    return data;
  }