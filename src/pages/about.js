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
          I genuinely enjoy building and obsessing over software that feels great to use. I didn’t start coding until later in life, but once I discovered it, it really clicked. I approach engineering with a growth mindset, first-principles thinking, and a constant question: “How will the user feel in this scenario?”
        </p>
        <p>
          I’m always in search of new things to learn although usually my tools of choice have been React and TypeScript because of their power and versatility. I've used these to build web, mobile, and desktop applications.
        </p>
        <p>
          At the end of the day, I’m driven by curiosity and the simple joy of turning problems into products people enjoy using.
        </p>

        <FavoritesAccordion />
      </Content>
    </Layout>
  );
};

export default AboutPage;
