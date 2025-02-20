// A mock function to mimic making an async request for data
export function fetchAllProduct(amount = 1) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    // console.log("data",data)
    resolve({ data });
  });
}

// A mock function to mimic making an async request for data
export function fetchProductsByFilters(filter) {
  let queryString = "";

  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    // console.log("data",data)
    resolve({ data });
  });
}
