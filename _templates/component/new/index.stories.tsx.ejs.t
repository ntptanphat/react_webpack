---
to: src/components/<%= level %>/<%= h.changeCase.camel(name) %>/index.stories.tsx
---
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components/macro';
import <%= h.changeCase.pascal(name) %> from './';

storiesOf('Components|<%= level %>/<%= h.changeCase.pascal(name) %>', module).add('default', () => {
  return (
    <Container>
      <<%= h.changeCase.pascal(name) %> />
    </Container>
  );
});

const Container = styled.div``;
