import * as actionTypes from './actionTypes';

const fetchDataStart = () => ({
    type: actionTypes.FETCH_DATA_START
});

const fetchDataSuccess = data => ({
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: data
});

const fetchDataFail = errorMessage => ({
    type: actionTypes.FETCH_DATA_FAIL,
    payload: errorMessage
});

export const clearData = () => ({
    type: actionTypes.CLEAR_DATA
});

export const fetchData = (query) => {
    return dispatch => {
        dispatch(fetchDataStart());

        fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
            .then(result => result.json())
            .then( data => dispatch(fetchDataSuccess(data)))
            .catch(error => {
                console.dir(error);
                dispatch(fetchDataFail(error.message));
            });
    };
};