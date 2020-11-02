import { CREATE_ORDER, CLEAR_CART, CLEAR_ORDER, FETCH_ORDERS } from "../types";

export const createOrder = (order) => (dispatch) => {
  
  alert(`${order.cartItems.length} items of total $${order.total} placed by ${order.name} `);

  // dispatch({
  //   type: CREATE_ORDER,
  // })
  console.log(order);
  localStorage.clear("cartItems");
  dispatch({ type: CLEAR_CART });
};
export const clearOrder = () => (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
};
export const fetchOrders = () => (dispatch) => {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: FETCH_ORDERS, payload: data });
    });
};
