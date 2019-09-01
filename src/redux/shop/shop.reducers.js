import SHOP_DATA from './shop.data';

const INITIAL_DATA = {
    collections: SHOP_DATA
};

const shopReducer = (currentState = INITIAL_DATA, action) => {
    switch (action.type) {
        default:
            return currentState;
    }
};

export default shopReducer;
