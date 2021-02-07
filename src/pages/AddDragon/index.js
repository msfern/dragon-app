import React from 'react';
import Button from '../../components/Button';
import {
  Container,
  FormContainer,
  InputBlock,
  ButtonContainer,
} from './styles';

const AddDragon = () => {
  return (
    <Container>
      <h1>New Dragon</h1>
      <form onSubmit={() => console.log('hey')}>
        <FormContainer>
          <InputBlock>
            <label>Name</label>
            <input type="text" required />
          </InputBlock>
          <InputBlock>
            <label>Type</label>
            <input type="text" required />
          </InputBlock>
        </FormContainer>
        <ButtonContainer>
          <Button isTransparent to={{ pathname: '/dashboard' }}>
            Cancel
          </Button>
          <Button>Create</Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default AddDragon;
