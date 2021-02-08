import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerLink, ContainerButton } from './styles';

function Button({ children, to, isTransparent, onClick, type }) {
  return to ? (
    <ContainerLink isTransparent={isTransparent}>
      <Link to={to}>{children}</Link>
    </ContainerLink>
  ) : (
    <ContainerButton
      isTransparent={isTransparent}
      onClick={onClick}
      type={type}
    >
      {children}
    </ContainerButton>
  );
}

export default Button;
