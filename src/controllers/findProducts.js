import {serverURL} from "../data/server.js";

export async function findProducts(page,size,category,subcategory,search,sort) {
  !sort && (sort = "none")
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch( serverURL + `api/products?page=${page}&size=${size}&category=${category}&subcategory=${subcategory}&search=${search}&sort=${sort}`,
      requestOptions
    );
    const data = await response.json();
    return data;
}

