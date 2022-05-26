import { serverURL } from "../data/server";

export async function logInUser(input) { //Controlador utilizado para loguear
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ //Ambos datos necesarios son pasados dentro del body
            email: input.email.data,
            password: input.password.data,
        }),
    };
    const response = await fetch(
        serverURL + `api/users/login/user`,
        requestOptions
    );
    const data = await response.json();
    return data; //Retorna un objeto que contiene el estado de la transacción, el mensage generado y los datos
}