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

const Bio = styled.div`
  margin-top: 1.5rem;

  p {
    margin-top: 0;
  }

  ::after {
    content: '';
    display: block;
    clear: both;
  }
`;

const HeadshotImage = styled.img`
  float: right;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  margin: 0 0 1rem 2rem;
  shape-outside: circle();

  @media (max-width: 600px) {
    float: none;
    display: block;
    margin: 0 auto 1.25rem;
  }
`;

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Content>
        <PageTitle>About</PageTitle>
        <ViewResumeButton />

        <Bio>
          <HeadshotImage src="/me headshot.png" alt="Tim R" />
          <p>
            I genuinely enjoy building and obsessing over software that feels great to use. I didn&apos;t start coding until later in life, but once I discovered it, it really clicked. I approach engineering with a growth mindset, first-principles thinking, and a constant question: &ldquo;How will the user feel in this scenario?&rdquo;
          </p>
          <p>
            I&apos;m always in search of new things to learn although usually my tools of choice have been React and TypeScript because of their power and versatility. I&apos;ve used these to build web, mobile, and desktop applications.
          </p>
          <p>
            At the end of the day, I&apos;m driven by curiosity and the simple joy of turning problems into products people enjoy using.
          </p>
        </Bio>

        <FavoritesAccordion />
      </Content>
    </Layout>
  );
};

export default AboutPage;
