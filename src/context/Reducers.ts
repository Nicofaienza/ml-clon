import { Product, State, ProductDetailsType } from "../interfaces/interfaces";

export type ActionType =
  | { type: "setQuery"; payload: string }
  | {
      type: "getProducts";
      payload: Product[];
    }
  | { type: "selectProduct"; payload: ProductDetailsType };

export function productsReducer(state: State, action: ActionType) {
  switch (action.type) {
    case "setQuery":
      return { ...state, query: action.payload };

    case "getProducts":
      return { ...state, products: action.payload };

    case "selectProduct":
      return { ...state, selectedProduct: action.payload };

    default:
      return state;
  }
}
