import './ProductsPage.css'
import {ProductsList} from "../../components/ProductsList/ProductsList";
import {Header} from "../../components/Header/Header";


export const ProductsPage = () => {
    return (
        <div>
            <Header label="Products List" />
            <div className='products-panel'>
                <ProductsList />
            </div>
        </div>
    )
}
