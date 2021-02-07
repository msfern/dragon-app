import styled from 'styled-components';

const Container = styled.button`
  background: ${props => (props.disabled ? '#8C8C8C' : '#44af69')};
  border-radius: 5px;
  border: 0;
  padding: 12px 30px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background: ${props => (props.disabled ? '#8C8C8C' : '#4dca78')};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`;

export default Container;
