import React from 'react';
import { Box } from '@chakra-ui/core';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const SupportPage = () => {
  return (
    <Layout>
      <SEO title="Support" />
      <Content>
        <h1>Support</h1>
        <h4>For apps: Minimal Meditation and Chinese Language Flip</h4>
        <Box mb="60px">
          For support, contact devtimr@gmail.com or open an issue on{' '}
          <a href="https://github.com/trybick"> GitHub</a>.
        </Box>
      </Content>
    </Layout>
  );
};

export default SupportPage;
