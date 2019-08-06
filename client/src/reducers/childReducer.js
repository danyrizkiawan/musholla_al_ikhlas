import uuid from 'uuid';
import { GET_CHILDREN, ADD_CHILDREN, DELETE_CHILDREN} from '../actions/types';

const initialState = {
    children: [
        {
            id: uuid(),
            name: 'Adi'
        }, {
            id: uuid(),
            name: 'Budi'
        }, {
            id: uuid(),
            name: 'Cindi'
        }, {
            id: uuid(),
            name: 'Dany'
        }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CHILDREN:
            return {
                ...state
            }
        default:
            return state;
    }
    
}