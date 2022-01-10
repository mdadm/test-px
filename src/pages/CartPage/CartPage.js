import './CartPage.css'
import {Header} from "../../components/Header/Header";
import {CartList} from "../../components/CartList/CartList";


export const CartPage = () => {
    return (
        <div>
            <Header label="CartList Page" />
            <div className='cart-panel'>
                <CartList />
            </div>
        </div>
    )
}
