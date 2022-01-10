import {useSelector} from "react-redux";

export const useProductAmount = (productName) =>
    useSelector((state) => state.cart.products[productName]?.amount || 0);