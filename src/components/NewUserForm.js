import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const NewUserForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      firstName: firstName,
      lastName: lastName,
    });
    setFirstName('');
    setLastName('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>First Name</Label>
        <Input
          required
          placeholder="First name"
          onChange={handleFirstNameChange}
          value={firstName}
        />
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>
        <Input
          required
          placeholder="First name"
          onChange={handleLastNameChange}
          value={lastName}
        />
      </FormGroup>
      <FormGroup>
        <Button block outline type="submit" color="primary">
          Create
        </Button>
      </FormGroup>
    </Form>
  );
};

export default NewUserForm;
