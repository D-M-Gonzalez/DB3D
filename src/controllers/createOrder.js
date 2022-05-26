import { serverURL } from "../data/server";

export async function createOrder(input,products,token) { //Controlador utilizado para crear un nuevo usuario
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${token}` , //token required to validate the user
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
    const response = await fetch( serverURL + `api/orders/`, //Pasa la id del usuario por query
    requestOptions
    );
    const data = await response.json();
    return data; //Retorna un objeto que contiene el estado de la transacción, el mensage generado y los datos
  }