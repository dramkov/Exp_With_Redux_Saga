export const GET_USERS_REQUEST = 'users/get_users_request';
export const GET_USERS_SUCCESS = 'users/get_users_success';
export const CREATE_USER_REQUEST = 'users/create_user_request';
export const DELETE_USER_REQUEST = 'users/delete_user_request';
export const USERS_ERROR = 'users/user_error';

export const getUsersRequest = () => {
  return { type: GET_USERS_REQUEST };
};

export const getUsersSuccess = ({ items }) => {
  return { type: GET_USERS_SUCCESS, payload: { items } };
};

export const createUserRequest = ({ firstName, lastName }) => {
  return {
    type: CREATE_USER_REQUEST,
    payload: {
      firstName,
      lastName,
    },
  };
};

export const deleteUserRequest = (userId) => {
  return {
    type: DELETE_USER_REQUEST,
    payload: {
      userId,
    },
  };
};

export const usersError = ({ error }) => ({
  type: USERS_ERROR,
  payload: {
    error,
  },
});
