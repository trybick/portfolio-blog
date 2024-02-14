import { ChakraProvider } from '@chakra-ui/react';
import 'prism-themes/themes/prism-nord.css';
import 'typeface-nunito';

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider>{element}</ChakraProvider>;
};
