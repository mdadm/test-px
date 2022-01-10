import axios from "axios";
import {useEffect, useState} from "react";
import {store} from "../store";
import {addProductList} from "../store/products/ProductActions";

export const useProductsList = () => {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DATA_URL}/data`).then((resp) => {
            setItemList(resp.data);
        }).catch(e => console.error(e));
    }, []);

    itemList && store.dispatch(addProductList(itemList));
}