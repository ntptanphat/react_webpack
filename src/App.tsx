import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Heading } from './components/heading';
import Button from './components/atoms/button';
import Text from './components/atoms/text';

const App = () => {
  return (
    <div>
      <Heading>Button Text</Heading>
      <Text>Text ne</Text>
      <Button>fdfsadf</Button>
    </div>
  );
};
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap');
  body {
    font-size: 16px;
    margin: 0;
    line-height: 1.15;
    letter-spacing: 0.02em;
    font-family: 'Montserrat', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
export default App;
