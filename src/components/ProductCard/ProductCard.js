import './ProductCard.css'
import {ProductQuantity} from "../ProductQuantity/ProductQuantity";
import {addProductToCart, removeProductFromCart} from "../../store/products/ProductActions";
import {store} from "../../store";
import {useProductCount} from "../../hooks/useProductCount";

export const ProductCard = ({ product }) => {
    const productCount = useProductCount(product.name);

    const onDecrease = () => {
        store.dispatch(removeProductFromCart({name: product.name, price: product.price}));
    }

    const onIncrease = () => {
        store.dispatch(addProductToCart({name: product.name, price: product.price, image: product.image}));
    }

    return (
        <div className="product-card">
            <div className="cart-card__name">
                {product.name}
            </div>
            <div  className="cart-card__price">
                {`${product.price}$`}
            </div>
            <img className="cart-card__image" src={`${product.image}`} alt={`${product.image}`} />
            <ProductQuantity count={productCount} onDecrease={onDecrease} onIncrease={onIncrease}/>
        </div>
    )
}

