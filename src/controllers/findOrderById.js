import { serverURL } from "../data/server.js";

export async function findOrderById(id) {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch( serverURL + `api/orders/${id}`,
      requestOptions
    );
    const data = await response.json();
    return data;
}