import React from 'react';
import styled, { css } from 'styled-components/macro';

type Props = {
  size?: 'small' | 'medium';
};

const Button: React.FC<Props> = ({ size, children }) => {
  return <Container size={size}>{children}</Container>;
};

const Container = styled.button<Props>`
  padding: 10px;
  ${(props) => css``}
`;

export default Button;
