import {useSelector} from "react-redux";

export const useProductCount = (productName) =>
    useSelector((state) => state.cart.products[productName]?.count || 0);