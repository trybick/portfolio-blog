import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';
import '../style/reset.css';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
`;

const Content = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`;

const Layout = ({ children }) => (
  <PageWrapper>
    <Header />
    <Content>
      <main>{children}</main>
    </Content>
    <Footer />
  </PageWrapper>
);

export default Layout;
