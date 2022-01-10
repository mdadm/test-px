import {useSelector} from "react-redux";

export const useCartProducts = () => useSelector((state) => state.cart.products);