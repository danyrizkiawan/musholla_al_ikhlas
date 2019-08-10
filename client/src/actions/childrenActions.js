import axios from 'axios';
import {
    GET_CHILDREN,
    ADD_CHILDREN,
    DELETE_CHILDREN,
    CHILDREN_LOADING
} from '../actions/types';

export const getChildren = () => dispatch => {
    dispatch(setChildrenLoading());
    axios.get('/api/children')
        .then(res =>
            dispatch({
                type: GET_CHILDREN,
                payload: res.data
            })
        )
};

export const addChildren = child => dispatch => {
    axios
        .post('/api/children/add', child)
        .then(res => dispatch({
            type: ADD_CHILDREN,
            payload: res.data
        }))
};

export const deleteChildren = id => dispatch => {
    axios
        .delete(`/api/children/${id}`)
        .then(res => dispatch({
            type: DELETE_CHILDREN,
            payload: id
        }));
};


export const setChildrenLoading = () => {
    return {
        type: CHILDREN_LOADING,
    };
};