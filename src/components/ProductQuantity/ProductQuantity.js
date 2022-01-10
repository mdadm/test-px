import './ProductQuantity.css'

export const ProductQuantity = ({count, onDecrease, onIncrease}) => {
    return (
        <div className="product-quantity">
            <button className="product-quantity__button" onClick={onDecrease} disabled={count < 1}>-</button>
            <div className="product-quantity__count">{count}</div>
            <button className="product-quantity__button" onClick={onIncrease}>+</button>
        </div>
    )
}