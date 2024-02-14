import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import ViewResumeButton from '../components/ViewResumeButton';
import FavoritesAccordion from '../components/FavoritesAccordion';
import PageHead from '../components/PageHead';

export function Head() {
  return <PageHead title="About" />;
}

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
      <Content>
        <PageTitle>About</PageTitle>
        <ViewResumeButton />

        <p>
          I grew up in the 90s and dabbled with programming in the MySpace era but didn’t fully get
          into coding until I attented a web dev bootcamp in 2018. Since then I feel like I found my
          true calling.
        </p>
        <p>
          I enjoy the web development ecosystem because of the endless possibilities between web,
          mobile, and desktop apps.
        </p>
        <p>I care about creating things that are useful to people.</p>

        <FavoritesAccordion />
      </Content>
    </Layout>
  );
};

export default AboutPage;
