import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerLink = styled.button`
  background: ${props => (props.isTransparent ? 'transparent' : '#44af69')};
  border-radius: 5px;
  border: 0;
  font-weight: 600;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background: ${props => (props.isTransparent ? 'transparent' : '#4dca78')};
  }

  a {
    padding: 12px 30px;
    display: block;
    text-decoration: none;
    color: ${props => (props.isTransparent ? '#343434' : '#fff')};
  }
`;

export const ContainerButton = styled.button`
  background: ${props => (props.isTransparent ? 'transparent' : '#44af69')};
  color: ${props => (props.isTransparent ? '#343434' : '#fff')};
  border-radius: 5px;
  border: 0;
  padding: 12px 30px;
  font-weight: 600;
  text-align: center;
  transition: background-color 0.2s;
  text-decoration: none;

  &:hover {
    background: ${props => (props.isTransparent ? 'transparent' : '#4dca78')};
  }
`;
