import { ChakraProvider } from '@chakra-ui/react';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import 'typeface-nunito';

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider>{element}</ChakraProvider>;
};

// Umami Analytics
export const onRenderBody = ({ setHeadComponents }) => {
  const isEnabled = process.env.NODE_ENV === 'production';
  if (!isEnabled) {
    return null;
  }

  return setHeadComponents([
    <script
      async
      defer
      key="gastby-plugin-umami"
      id="gastby-plugin-umami"
      src="https://cloud.umami.is/script.js"
      data-website-id="48c1ee6e-d63c-4d03-a6e0-1e7f990784eb"
      data-do-not-track="false"
    ></script>,
  ]);
};
