import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@chakra-ui/core';
import Layout from '../components/Layout1';
import SEO from '../components/SEO1';

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const PageTitle = styled.h1`
  margin-bottom: 10px;
`;

const ResumeLinkContainer = styled.div`
  text-align: right;
  margin-bottom: 20px;

  @media screen and (max-width: 450px) {
    text-align: left;
    margin: 20px 0;
  }
`;

const ResumeLink = styled.a`
  text-decoration: none;
`;

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Content>
        <PageTitle>About</PageTitle>
        <ResumeLinkContainer>
          <ResumeLink
            href="https://drive.google.com/file/d/1t1BnEI714ydFMA7APf4tkwcCHJEBWzpd/edit"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              leftIcon="chevron-right"
              size="sm"
              variant="ghost"
              variantColor="white"
              _hover={{ bg: '#ebedf0', cursor: 'pointer' }}
            >
              View Resume
            </Button>
          </ResumeLink>
        </ResumeLinkContainer>
        <p>
          Hey there, I'm Tim and I'm a software developer specializing in React.js and JavaScript. I
          enjoy finding fast and simple ways of doing things. My other passions are playing music,
          running, and building computers.
        </p>
        <p>More to come soon</p>
      </Content>
    </Layout>
  );
};

export default AboutPage;
