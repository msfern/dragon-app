import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import {
  Container,
  FormContainer,
  InputBlock,
  ButtonContainer,
} from './styles';

const Details = ({ match, location }) => {
  const dragonId = match.params.id;
  const { name: dragonName, type: dragonType } = location.state;
  const history = useHistory();
  const [name, setName] = useState(dragonName);
  const [type, setType] = useState(dragonType);

  const updateDragon = async () => {
    const dragon = {
      name,
      type,
    };
    await fetch(
      `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragonId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(dragon),
      }
    );
    history.push('/dashboard');
  };

  const onFormSubmit = e => {
    e.preventDefault();
    updateDragon();
  };

  return (
    <Container>
      <h1>{dragonName}</h1>
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
          <Button type="submit">Save</Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default Details;
