import './CartList.css'
import {CartCard} from "../CartCard/CartCard";
import {useCartProducts} from "../../hooks/useCartProducts";
import {useState} from "react";

export const CartList = () => {
    const [cartList, setCartList] = useState(useCartProducts());

    const onRemove = (name) => {
        const updatedCartList = Object.assign({}, cartList);
        const result = Object.entries(updatedCartList).reduce((res, [key, value]) => {
                if (key !== name) {
                    res[key] = value;
                }

                return res;
            }, {})

        setCartList(result);
    }

    return (
        <div className="cart-list">
            {Object.entries(cartList).map((itm, key) => {
                    const product = {name: itm[0], amount: itm[1].amount, image: itm[1].image};
                    return (
                        <div key={key}>
                            <CartCard product={product} onRemove={onRemove}/>
                        </div>
                    )
                }
            )}
        </div>
    )
}
