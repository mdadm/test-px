const defaultState = {
    productList: [],
    cart: {
        products: {},
        totalAmount: 0,
        totalCount: 0,
    },
}

export default function ProductReducer(
    state = defaultState,
    action
) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_PRODUCTS_LIST':
            return {
                productList: state.productList,
            }
        case 'ADD_PRODUCTS_LIST':
            return {
                cart: state.cart,
                productList: action.productList,
            }
        case 'GET_TOTAL_COST':
            return {
                productList: state.cart.totalAmount,
            }
        case 'GET_TOTAL_COUNT':
            return {
                productList: state.cart.totalCount,
            }
        case 'GET_PRODUCT_COUNT_BY_NAME':
            return state.cart[action.product.name].count

        case 'ADD_PRODUCT_TO_CART':
            if (!newState.cart.products[action.product.name]) {
                newState.cart.products[action.product.name] = {
                    count: 1,
                    amount: action.product.price,
                    price: action.product.price,
                    image: action.product.image
                }

                newState.cart.totalCount++;
                newState.cart.totalAmount = newState.cart.totalAmount + action.product.price;

                return newState
            }

            newState.cart.products[action.product.name] = {
                count: newState.cart.products[action.product.name].count + 1,
                amount: newState.cart.products[action.product.name].amount + action.product.price,
                price: newState.cart.products[action.product.name].price,
                image: newState.cart.products[action.product.name].image
            }

            newState.cart.totalCount++;
            newState.cart.totalAmount = newState.cart.totalAmount + action.product.price;

            return newState
        case 'REMOVE_PRODUCT_FROM_CART':
            if (newState.cart.products[action.product.name].count > 1) {
                newState.cart.products[action.product.name].count--;
                newState.cart.products[action.product.name].amount = newState.cart.products[action.product.name].amount - action.product.price;

                newState.cart.totalCount--;
                newState.cart.totalAmount = newState.cart.totalAmount - action.product.price;

                return newState
            }

            delete newState.cart.products[action.product.name]

            newState.cart.totalCount--;
            newState.cart.totalAmount -= action.product.price;

            return newState

        case 'TOTAL_REMOVE_PRODUCT_FROM_CART':
            newState.cart.totalCount = newState.cart.totalCount - newState.cart.products[action.product.name].count;
            newState.cart.totalAmount -= newState.cart.products[action.product.name].amount;

            delete newState.cart.products[action.product.name]

            return newState

        default: {
            return newState
        }
    }
}
