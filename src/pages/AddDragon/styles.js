import styled from 'styled-components';

export const Container = styled.div`
  width: 70vw;
  max-width: 940px;
  margin: 10vh auto;
`;

export const FormContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  margin: 30px 0;
  padding: 30px;
  box-shadow: 0 0 3px rgb(0 0 0 / 10%);
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    margin-bottom: 10px;
  }

  input {
    box-shadow: none;
    border: 1px solid #ccc;
    padding: 6px;
    border-radius: 5px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 15px;
  }
`;
