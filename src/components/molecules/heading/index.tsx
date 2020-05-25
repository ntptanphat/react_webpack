import React from 'react';
import styled from 'styled-components/macro';

interface ContainerProps {}

type Props = {} & ContainerProps;

const Heading: React.FC<Props> = props => {
  return <Container></Container>;
};

const Container = styled.div<ContainerProps>``;

export default Heading;
