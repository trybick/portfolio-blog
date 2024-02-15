import { ChakraProvider } from '@chakra-ui/react';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import '@fontsource-variable/nunito';

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider>{element}</ChakraProvider>;
};
