import React from "react";
import {Route, Routes} from "react-router-dom";
import {useProductsList} from "./hooks/useProductsList";
import {ProductsPage} from "./pages/ProductsPage/ProductsPage";
import {CartPage} from "./pages/CartPage/CartPage";

export const App = () => {
    useProductsList();

    return (
        <Routes>
            <Route path="/" element={<ProductsPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
        </Routes>

    );
}

export default App;
