import { extendTheme } from '@chakra-ui/react';

export const colors = {
  background: '#0A1128',
  primary: '#f5f5f5',
  gray: '#adb5bd',
  highlight: '#0096c7',
};

const theme = extendTheme({
  colors,
});

export default theme;
