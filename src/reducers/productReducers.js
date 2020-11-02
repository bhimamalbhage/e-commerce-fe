import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_SIZE,
    ORDER_PRODUCTS_BY_PRICE,
  } from "../types";
  
  export const productsReducer = (state = {}, action) => {
    
    switch (action.type) {

      case FILTER_PRODUCTS_BY_SIZE:
        // const pload = action.payload.products;
        return {
          ...state,
          size: action.payload.size,
          filteredItems: action.payload.items,
        };
      case ORDER_PRODUCTS_BY_PRICE:
        // const pload = action.payload.products;
        return {
          ...state,
          sort: action.payload.sort,
          filteredItems: action.payload.items,
        };
      case FETCH_PRODUCTS:
        const pload = action.payload.products;
        return { items: pload, filteredItems: pload };
      default:
        return state;
    }
  };
  