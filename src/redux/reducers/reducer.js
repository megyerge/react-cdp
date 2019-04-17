import * as actionTypes from '../actions/actionTypes';

const initState = {
    result: [],
    isLoading: false,
    error: null
}

const reducer = (state = initState, action) => {
	switch(action.type) {
        case actionTypes.FETCH_DATA_START:
            return {
                ...state,
                isLoading: true
            };
        case actionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                result: action.payload,
                isLoading: false
            };
        case actionTypes.FETCH_DATA_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case actionTypes.CLEAR_DATA:
            return {
                ...state,
                result: []
            };
        default:
            return state;
    }
}

export default reducer;