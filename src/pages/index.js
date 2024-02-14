import React from 'react';
import LandingBio from '../components/Landing';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';

export function Head() {
  return <PageHead title="Tim Rybicki | Software Developer" />;
}

const IndexPage = () => (
  <Layout>
    <LandingBio />
  </Layout>
);

export default IndexPage;
