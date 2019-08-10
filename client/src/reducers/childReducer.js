import {
    GET_CHILDREN,
    ADD_CHILDREN,
    DELETE_CHILDREN,
    CHILDREN_LOADING
} from '../actions/types';

const initialState = {
    children: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CHILDREN:
            return {
                ...state,
                children: action.payload,
                loading: false
            };
        case DELETE_CHILDREN:
            return {
                ...state,
                children: state.children.filter(child => child._id !== action.payload)
            };
        case ADD_CHILDREN:
            return {
                ...state,
                children: [action.payload, ...state.children]
            };
        case CHILDREN_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }

}