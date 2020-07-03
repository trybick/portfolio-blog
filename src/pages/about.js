import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@chakra-ui/core';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const ResumeLink = styled.a`
  text-decoration: none;
`;

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Content>
        <h1>About</h1>
        <ResumeLink
          href="https://drive.google.com/file/d/1t1BnEI714ydFMA7APf4tkwcCHJEBWzpd/edit"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            leftIcon="chevron-right"
            _hover={{ bg: '#ebedf0', cursor: 'pointer' }}
            size="sm"
            variant="ghost"
            variantColor="white"
          >
            View Resume
          </Button>
        </ResumeLink>
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
