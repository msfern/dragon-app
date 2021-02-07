import React from 'react';
// import PropTypes from 'prop-types';
import Container from './styles';

function Button({ children, disabled, onClick }) {
  return (
    <Container disabled={disabled} onClick={onClick}>
      {children}
    </Container>
  );
}

// Button.propTypes = {
//   disabled: PropTypes.bool.isRequired,
//   children: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

export default Button;
