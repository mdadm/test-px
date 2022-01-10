export const addProductList = (productList) => ({
    type: 'ADD_PRODUCTS_LIST',
    productList: productList,
});

export const addProductToCart = (product) => ({
    type: 'ADD_PRODUCT_TO_CART',
    product: product,
});

export const removeProductFromCart = (product) => ({
    type: 'REMOVE_PRODUCT_FROM_CART',
    product: product,
});

export const totalRemoveProductFromCart = (product) => ({
    type: 'TOTAL_REMOVE_PRODUCT_FROM_CART',
    product: product,
});