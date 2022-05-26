import { serverURL } from "../data/server";

export async function modifyUser(input,id,token) { //Controlador utilizado para crear un nuevo usuario
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${token}` , //token required to validate the user
        },
        body: JSON.stringify({
            name: input.name.data,
            surname: input.surname.data,
            phone: input.phone.data,
        }),
    };
    const response = await fetch( serverURL + `api/users/${id}`, //Pasa la id del usuario por query
    requestOptions
    );
    const data = await response.json();
    return data; //Retorna un objeto que contiene el estado de la transacción, el mensage generado y los datos
  }