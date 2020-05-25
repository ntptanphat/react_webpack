---
to: src/components/<%= level %>/<%= h.changeCase.camel(name) %>/index.tsx
---
import React from 'react';
import styled from 'styled-components/macro';

interface ContainerProps {}

type Props = {} & ContainerProps;

const <%= h.changeCase.pascal(name) %>: React.FC<Props> = props => {
  return <Container></Container>;
};

const Container = styled.div<ContainerProps>``;

export default <%= h.changeCase.pascal(name) %>;
