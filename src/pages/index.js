import React from 'react';
import LandingBio from '../components/LandingBio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`tim rybicki`, `portfolio`, `blog`]} />
    <LandingBio />
  </Layout>
);

export default IndexPage;
