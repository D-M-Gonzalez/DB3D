import { serverURL } from "../data/server.js";

export async function findUserById(id,token) {
    const auth = token ? `JWT "${token}"` : null
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth ,
      },
    };
    const response = await fetch( serverURL + `api/users/${id}`,
      requestOptions
    );
    const data = await response.json();
    return data;
}