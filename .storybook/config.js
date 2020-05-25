import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import requireContext from 'require-context.macro';
// import { GlobalStyle } from '../src/App';
// import 'sanitize.css';

addDecorator((s) => (
  <div>
    {/* <GlobalStyle /> */}
    {s()}
  </div>
));

// automatically import all files ending in *.stories.tsx
configure(requireContext('../src', true, /\.stories\.tsx$/), module);
