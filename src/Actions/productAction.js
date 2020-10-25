import { FETCT_PRODUCTS } from "../type";

export const fetchProducts = () => async (dispatch) => {
    const res = await fetch("/api/products");
    const data = await res.json();
    console.log(data);
    dispatch({
      type: FETCT_PRODUCTS,
      payload: data,
    });
  };