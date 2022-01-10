import './CartCard.css'
import remove from '../../images/remove.png'
import {ProductQuantity} from "../ProductQuantity/ProductQuantity";
import {addProductToCart, removeProductFromCart, totalRemoveProductFromCart} from "../../store/products/ProductActions";
import {store} from "../../store";
import {useProductCount} from "../../hooks/useProductCount";
import {useProductAmount} from "../../hooks/useProductAmount";
import {useProductPrice} from "../../hooks/useProductPrice";
import {useState} from "react";
import {ModalDialog} from "../ModalDialog/ModalDialog";

export const CartCard = ({product, onRemove}) => {
    const [isShow, setIsShow] = useState(false);

    const productCount = useProductCount(product.name);
    const productPrice = useProductPrice(product.name);
    const productAmount = Number(useProductAmount(product.name)).toFixed(2) || 0;

    const onDecrease = () => {
        if (productCount === 1) {
            setIsShow(true);

            return
        }

        store.dispatch(removeProductFromCart({name: product.name, price: productPrice}));
    }

    const onIncrease = () => {
        store.dispatch(addProductToCart({name: product.name, price: productPrice}));
    }

    const onClickRemove = () => {
        setIsShow(true);
    }

    const onConfirm = () => {
        setIsShow(false);
        store.dispatch(totalRemoveProductFromCart({name: product.name}));
        onRemove(product.name);
    }

    return (
        <div className="cart-card">
            {isShow && <ModalDialog
                label="Remove Product From CartList"
                message="Do you really want to remove this product from cart?"
                onConfirm={onConfirm}
                onCancel={() => setIsShow(false)}
            />}
            <div className="cart-card__name">
                {product.name}
            </div>
            <img className="cart-card__image" src={`${product.image}`} alt={`${product.image}`} />
            <div  className="cart-card__price">
                {`${productPrice}$`}
            </div>
            <div  className="cart-card__price">
                {`${productAmount}$`}
            </div>
            <ProductQuantity count={productCount} onDecrease={onDecrease} onIncrease={onIncrease}/>
            <input
                type="image"
                className="cart-card__remove"
                onClick={onClickRemove}
                src={remove}
                alt="remove"
            />
        </div>
    )
}

