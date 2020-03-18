import * as Types from './../constants/ActionTypes';

var initialSate = [];

const products = (state = initialSate, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            state = state.filter(item => item.id !== action.id);
            return [...state];
        case Types.UPDATE_PRODUCT:
            state = state.map(item => {
                if (item.id === action.id) {
                    item.name = action.product.name;
                    item.price = action.product.price;
                    item.status = action.product.status;
                }
                return item;
            })
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        default: return [...state];
    }
}

export default products;