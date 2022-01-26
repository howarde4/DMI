import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: 5px;
  background: transparent;
  border: 2px solid blue;
  color: blue;
  margin: 0.25rem;

  ${props =>
    props.primary &&
    css`
      background: blue;
      color: white;
    `};
`;

export default Button;
