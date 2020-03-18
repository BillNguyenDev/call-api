import * as Types from './../constants/ActionTypes';

var initialSate = {};

const itemEditing = (state = initialSate, action) => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            return action.product;
        default: return state;
    }
}

export default itemEditing;