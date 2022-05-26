import { serverURL } from "../data/server.js";

export async function findOrderById(id) { //Controlador usado para encontrar todos los items de un usuario
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch( serverURL + `api/orders/${id}`, //Pasa la id del usuario por query
      requestOptions
    );
    const data = await response.json();
    return data; //Retorna un objeto que contiene el estado de la transacción, el mensage generado y los datos
}