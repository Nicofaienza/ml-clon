import { useReducer } from "react";
import { Product, ProductDetailsType } from "../interfaces/interfaces";
import { AppContext } from "./context";
import { productsReducer } from "./Reducers";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const ContextProvider = ({ children }: props) => {
  const initialState = {
    query: "",
    products: [],
    selectedProduct: {
      id: "",
      sold_quantity: 0,
      condition: "",
      title: "",
      original_price: 0,
      price: 0,
      buying_mode: "",
      available_quantity: 0,
      pictures: [],
      descriptions: [],
      permalink: "",
      seller_address: {
        city: { id: "", name: "" },
        country: { id: "", name: "" },
        id: 1243854694,
        search_location: { city: {}, state: {} },
        state: { id: "", name: "" },
      },
      attributes: [
        {
          value_name: "",
          name: "",
          id: "",
        },
      ],
      error: "",
    },
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  function setQuery(query: string) {
    dispatch({ type: "setQuery", payload: query });
  }

  function getProducts(array: Product[]) {
    dispatch({ type: "getProducts", payload: array });
  }

  function selectProduct(product: ProductDetailsType) {
    dispatch({ type: "selectProduct", payload: product });
  }

  return (
    <AppContext.Provider
      value={{
        state,
        setQuery,
        getProducts,
        selectProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
