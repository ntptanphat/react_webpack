import React from 'react';
import styled, { css } from 'styled-components/macro';

type Props = {
  size?: '12px' | '14px' | '18px' | '20px' | '24px' | '30px' | '32px';
  textTransform?: 'uppercase' | 'capitalize';
  weight?: 'medium' | 'bold';
  color?: 'gold' | 'gray' | 'grayLight';
};

const Text: React.FC<Props> = ({
  size,
  textTransform,
  weight,
  color,
  children,
}) => {
  return (
    <Container
      size={size}
      textTransform={textTransform}
      weight={weight}
      color={color}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<Props>`
  ${(props) => css`
      font-size: ${props.size};
      font-weight: ${props.weight};
    ? props.weight === 'bold'
      ? '600'
      : '400'
    : '300'};
      text-transform: ${props.textTransform};
    `}
`;

export default Text;
