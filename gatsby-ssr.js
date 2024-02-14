import { ChakraProvider } from '@chakra-ui/react';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import 'typeface-nunito';

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider>{element}</ChakraProvider>;
};

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en' });
};
