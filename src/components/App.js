import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'reactstrap';

import * as usersActions from '../store/actions/users';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';

const App = () => {
  const users = useSelector((state) => state.users.items);
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersActions.getUsersRequest());
  }, [dispatch]);

  const handleSubmit = ({ firstName, lastName }) => {
    dispatch(
      usersActions.createUserRequest({
        firstName,
        lastName,
      })
    );
  };

  const handleDeleteUserClick = (userId) => {
    dispatch(usersActions.deleteUserRequest(userId));
  };

  const handleCloseAlert = () => {
    dispatch(usersActions.usersError(''));
  };

  return (
    <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
      <Alert
        color="danger"
        isOpen={!!error}
        toggle={handleCloseAlert}
        fade={false}
      >
        {error}
      </Alert>
      <NewUserForm onSubmit={handleSubmit} />
      <UsersList onDeleteUser={handleDeleteUserClick} users={users} />
    </div>
  );
};

export default App;
