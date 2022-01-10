import {useSelector} from "react-redux";
import {ProductCard} from "../ProductCard/ProductCard";
import './ProductsList.css'

export const ProductsList = () => {
    const productsList = useSelector((state) => state.productList);

    return (
        <div className="products-list">
            {productsList.map((itm, key) => {
                    return (
                        <div key={key}>
                            <ProductCard product={itm} />
                        </div>
                    )
                }
            )}
        </div>
    )
}