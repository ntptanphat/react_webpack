import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components/macro';
import Heading from './';

storiesOf('Components|molecules/Heading', module).add('default', () => {
  return (
    <Container>
      <Heading />
    </Container>
  );
});

const Container = styled.div``;
