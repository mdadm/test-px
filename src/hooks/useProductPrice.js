import {useSelector} from "react-redux";

export const useProductPrice = (productName) =>
    useSelector((state) => {
        return state.cart.products[productName]?.price
    });
