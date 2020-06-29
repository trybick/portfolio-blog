import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Content>
        <h1>About</h1>
        <p>
          Hey there, I'm Tim and I'm a software developer specializing in React.js and JavaScript. I
          enjoy finding fast and simple ways of doing things. My other passions are playing music,
          running, and building computers.
        </p>
      </Content>
    </Layout>
  );
};

export default AboutPage;
