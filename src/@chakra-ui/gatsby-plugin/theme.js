import { extendTheme } from '@chakra-ui/react';

export const colors = {
  background: '#171923',
  primary: '#cbd5e0',
  gray: '#718096',
  highlight: '#0096c7',
};

const styles = {
  global: {
    body: {
      fontFamily: `'Nunito', sans-serif`,
      backgroundColor: colors.background,
      color: colors.primary,
    },

    // Link coloring
    [':any-link']: {
      color: `${colors.primary} !important`,
    },
    [':-webkit-any-link']: {
      color: `${colors.primary} !important`,
    },
    [':-moz-any-link']: {
      color: `${colors.primary} !important`,
    },

    // Code blocks
    [`:not(pre) > code[class*='language-']`]: {
      margin: '25px 0',
    },
    [`pre[class*='language-']`]: {
      margin: '25px 0',
    },
    [':not(pre) > code']: {
      fontSize: '0.9rem',
    },
    code: {
      color: colors.gray,
    },

    // Selection highlight
    ['h1::selection']: {
      background: colors.highlight,
    },
    ['h2::selection']: {
      background: colors.highlight,
    },
    ['h3::selection']: {
      background: colors.highlight,
    },
    ['h4::selection']: {
      background: colors.highlight,
    },
    ['h5::selection']: {
      background: colors.highlight,
    },
    ['h6::selection']: {
      background: colors.highlight,
    },
    ['p::selection']: {
      background: colors.highlight,
    },
    ['a::selection']: {
      background: colors.highlight,
    },
    ['li::selection']: {
      background: colors.highlight,
    },
    ['u::selection']: {
      background: colors.highlight,
    },
    ['i::selection']: {
      background: colors.highlight,
    },
    ['strong::selection']: {
      background: colors.highlight,
    },
    ['code::selection']: {
      background: colors.highlight,
    },
  },
};

const theme = {
  colors,
  styles,
  fonts: {
    heading: `'Nunito', sans-serif`,
  },
};

export default extendTheme(theme);
