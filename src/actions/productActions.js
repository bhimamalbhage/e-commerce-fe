import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types";

export const fetchProducts = () => async (dispatch) =>{
    // const res = await fetch("data.json");
    // const data = await res.json();
    // console.log(data);
    // dispatch({
    //     type: FETCH_PRODUCTS,
    //     payload: data,
    // })

    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response);
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        dispatch({
            type: FETCH_PRODUCTS,
            payload: myJson,
        })
        console.log("myjson");
      });
}

export const filterProducts = (products,size) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items: size === "" ? products : products.filter((x)=> x.availableSizes.indexOf(size) >= 0),
    }
  })
}

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts.slice();
  if (sort === "latest") {
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  console.log(sortedProducts);
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};