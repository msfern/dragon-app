import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import {
  Container,
  FormContainer,
  InputBlock,
  ButtonContainer,
} from './styles';

const AddDragon = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const addDragon = async () => {
    const dragon = {
      name,
      type,
      createdAt: new Date(Date.now()).toJSON(),
    };
    await fetch('https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(dragon),
    });
    history.push('/dashboard');
  };

  const onFormSubmit = e => {
    e.preventDefault();
    addDragon();
  };

  return (
    <Container>
      <h1>New Dragon</h1>
      <form onSubmit={onFormSubmit}>
        <FormContainer>
          <InputBlock>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </InputBlock>
          <InputBlock>
            <label>Type</label>
            <input
              type="text"
              value={type}
              onChange={e => setType(e.target.value)}
              required
            />
          </InputBlock>
        </FormContainer>
        <ButtonContainer>
          <Button isTransparent to={{ pathname: '/dashboard' }}>
            Cancel
          </Button>
          <Button type="submit">Create</Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default AddDragon;
