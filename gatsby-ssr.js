import { ChakraProvider } from '@chakra-ui/react';

// Add theme to code blocks. More themes here: https://github.com/PrismJS/prism-themes
import 'prism-themes/themes/prism-nord.css';
import 'typeface-nunito';

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider>{element}</ChakraProvider>;
};
