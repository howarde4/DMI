import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './buttonStyle';

const Button = ({ btnType, primary, msg }) => {
  if (primary) {
    return (
      <ButtonStyle primary type={btnType}>
        {msg}
      </ButtonStyle>
    );
  }
  return <ButtonStyle type={btnType}>{msg}</ButtonStyle>;
};

Button.propTypes = {
  btnType: PropTypes.string,
  primary: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  msg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
    PropTypes.object,
  ]),
};

export default Button;
