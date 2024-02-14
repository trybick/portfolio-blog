import { ChakraProvider } from '@chakra-ui/react';
import 'prism-themes/themes/prism-nord.css';
import 'typeface-nunito';
import theme from './src/style/theme';

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider theme={theme}>{element}</ChakraProvider>;
};
