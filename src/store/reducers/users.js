import { GET_USERS_SUCCESS, USERS_ERROR } from '../actions/users';

const intialState = {
  items: [],
  error: '',
};

export default (state = intialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
      };
    case USERS_ERROR:
      console.log(action.payload.error);
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
