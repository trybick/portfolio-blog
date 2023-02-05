import React from 'react';
import { css, Global } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';
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
    <ChakraProvider>
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

          :not(pre) > code[class*='language-'],
          pre[class*='language-'] {
            margin: 25px 0;
          }

          :not(pre) > code {
            font-size: 0.9rem;
          }
        `}
      />
      <Header />
      <Content>
        <main>{children}</main>
      </Content>
      <Footer />
    </ChakraProvider>
  </>
);

export default Layout;
