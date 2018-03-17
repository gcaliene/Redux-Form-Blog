import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload); //This line is why it is better to deal with an object rather than an array
    // return _.reject(state,post=> === action.payload); <-- this would have been needed if it was an array
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };

    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
};
