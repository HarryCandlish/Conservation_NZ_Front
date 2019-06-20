export function getProducts() {
  return request.get("/api/products").then(res => res.body);
}

export function getOneProduct() {
  return request.get(`/api/products/product/${id}`).then(res => res.body);
}
