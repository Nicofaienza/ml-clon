import { createContext } from "react";
import { Product, State, ProductDetailsType } from "../interfaces/interfaces";

export type AppContextProps = {
  state: State;
  setQuery: (id: string) => void;
  getProducts: (array: Product[]) => void;
  selectProduct: (product: ProductDetailsType) => void;
};
export const AppContext = createContext<AppContextProps>({} as AppContextProps);
