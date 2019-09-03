import ShopActionTypes from './shop.types';

const INITIAL_DATA = {
    collections: null
};

const shopReducer = (currentState = INITIAL_DATA, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...currentState,
                collections: action.payload
            }
        default:
            return currentState;
    }
};

export default shopReducer;
