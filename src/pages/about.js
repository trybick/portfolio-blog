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
  font-size: 1.2rem;
`;

const PageTitle = styled.h1`
  margin-bottom: 6px;
  font-size: 2.5rem;
`;

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Content>
        <PageTitle>About</PageTitle>
        <ViewResumeButton />

        <p>
          I grew up in the 90s and dabbled with programming in the MySpace era but didn’t fully get
          into coding until I attented a web dev bootcamp in 2018. Since then I feel like I found my
          true calling.
        </p>
        <p>
          I have focused on frontend web development using React and TypeScript because the power
          and flexibility it provides for building modern and useful web, mobile, and desktop
          applications.
        </p>

        <FavoritesAccordion />
      </Content>
    </Layout>
  );
};

export default AboutPage;
