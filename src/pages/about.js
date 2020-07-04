import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ViewResumeButton from '../components/ViewResumeButton';
import FavoritesAccordion from '../components/FavoritesAccordion';

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const PageTitle = styled.h1`
  margin-bottom: 4px;
`;

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Content>
        <PageTitle>About</PageTitle>
        <ViewResumeButton />

        <p>
          Hey there, I'm Tim and I'm a software developer specializing in React.js and JavaScript. I
          enjoy finding fast and simple ways of doing things. My other passions are playing music,
          running, and building computers.
        </p>

        <p>These are some of my favorite things!</p>
        <FavoritesAccordion />
      </Content>
    </Layout>
  );
};

export default AboutPage;
