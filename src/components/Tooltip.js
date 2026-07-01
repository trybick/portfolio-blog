import React from 'react';
import { Tooltip as ChakraTooltip } from '@chakra-ui/react';
import theme from '../@chakra-ui/gatsby-plugin/theme';

const Tooltip = ({ children, ...props }) => (
  <ChakraTooltip
    backgroundColor={theme.colors.primary}
    color={theme.colors.background}
    fontSize="14px"
    fontWeight="bold"
    borderRadius="4px"
    paddingX="8px"
    paddingY="4px"
    hasArrow
    openDelay={100}
    {...props}
  >
    {children}
  </ChakraTooltip>
);

export default Tooltip;
