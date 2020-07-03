import React from 'react';
import { css, Global } from '@emotion/core';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';
import '../style/reset.css';

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`;

const Layout = ({ children }) => (
  <>
    <ThemeProvider>
      <Global
        styles={css`
          h1::selection,
          h2::selection,
          h3::selection,
          h4::selection,
          h5::selection,
          h6::selection,
          p::selection,
          a::selection {
            background: #fffa96cc;
          }

          .gatsby-highlight {
            background-color: #1d1f21;
            border-radius: 0.3em;
            margin: 0.5em 0;
            padding: 1em;
            overflow: auto;
          }

          .gatsby-highlight pre[class*='language-'].line-numbers {
            padding: 0;
            padding-left: 2.8em;
            overflow: initial;
          }
        `}
      />
      <Header />
      <Content>
        <main>{children}</main>
      </Content>
      <Footer />
    </ThemeProvider>
  </>
);

export default Layout;
