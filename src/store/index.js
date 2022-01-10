import {createStore} from "redux";
import ProductReducer from "./products/ProductsReducer";

export const store = createStore(ProductReducer);