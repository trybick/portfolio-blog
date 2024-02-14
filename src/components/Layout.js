import React from 'react';
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
    <Header />
    <Content>
      <main>{children}</main>
    </Content>
    <Footer />
  </>
);

export default Layout;
