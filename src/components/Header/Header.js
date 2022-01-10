import {useSelector} from "react-redux";
import logo from "../../images/logo.png";
import cart from "../../images/cart.png";
import './Header.css'
import {Link} from "react-router-dom";

export const Header = ({label}) => {
    const totalCount = useSelector((state) => state.cart.totalCount || 0);
    const totalAmount = useSelector((state) => state.cart.totalAmount.toFixed(2) || 0);

    return (
        <div className='header'>
            <Link to="/">
                <img className="header__logo" src={logo} alt="logo"/>
            </Link>
            <span className='header__label'>{label}</span>
            <div className="header__cart-panel">
                <Link to="/cart">
                    {(totalCount > 0) && <div className='header__count'>{totalCount}</div>}
                    <img className="header__cart" src={cart} alt="cart"/>
                </Link>
                <div className='header__amount'>
                    <span>
                        Total:
                    </span>
                     <span>
                         ${Math.abs(totalAmount)}
                     </span>
                </div>
            </div>
        </div>
    )
}