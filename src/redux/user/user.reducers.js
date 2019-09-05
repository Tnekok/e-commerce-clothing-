import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
};

const userReducer = ( currentState = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case UserActionTypes.EMAIL_SIGN_IN_START:
            return {
                ...currentState,
                currentUser: action.payload
            };
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...currentState,
                currentUser: action.payload,
                error: null
            };
        case UserActionTypes.SIGN_IN_FAILURE:
            return {
                ...currentState,
                error: action.payload
            };
        default:
            return currentState;
    }
}

export default userReducer;
