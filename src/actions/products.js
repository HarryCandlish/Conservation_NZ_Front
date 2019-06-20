import { getProducts, getOneProduct } from "../api/products";

export function getAllProducts() {
  return dispatch => {
    return getProducts().then(products => {
      dispatch(saveProducts(products));
    });
  };
}

export function getOneProductId() {
  return dispatch => {
    return getOneProduct(id).then(product => {
      dispatch(saveSelectedProduct(product));
    });
  };
}
