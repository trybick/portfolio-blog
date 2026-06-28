import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ViewResumeButton from '../components/ViewResumeButton';
import FavoritesAccordion from '../components/FavoritesAccordion';
import { colors } from '../@chakra-ui/gatsby-plugin/theme';

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

const TopSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SideColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  > div {
    margin: 0;
    text-align: center;
  }
`;

const HeadshotImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  margin-bottom: 1rem;
  box-shadow: 0 0 0 4px ${colors.highlight}, 0 10px 24px rgba(0, 0, 0, 0.35);

  @media (max-width: 860px) {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
  }
`;

const IntroText = styled.div`
  p:first-of-type {
    margin-top: 0;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`;

const ClosingParagraph = styled.p`
  margin-top: 1.75rem;
`;

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Content>
        <PageTitle>About</PageTitle>

        <TopSection>
          <SideColumn>
            <HeadshotImage src="/me headshot.png" alt="Tim R" />
            <ViewResumeButton />
          </SideColumn>
          <IntroText>
            <p>
              I genuinely enjoy building and obsessing over software that feels great to use. I didn&apos;t start coding until later in life, but once I discovered it, it really clicked. I approach engineering with a growth mindset, first-principles thinking, and a constant question: &ldquo;How will the user feel in this scenario?&rdquo;
            </p>
            <p>
              I&apos;m always in search of new things to learn although usually my tools of choice have been React and TypeScript because of their power and versatility. I&apos;ve used these to build web, mobile, and desktop applications.
            </p>
          </IntroText>
        </TopSection>

        <ClosingParagraph>
          At the end of the day, I&apos;m driven by curiosity and the simple joy of turning problems into products people enjoy using.
        </ClosingParagraph>

        <FavoritesAccordion />
      </Content>
    </Layout>
  );
};

export default AboutPage;
