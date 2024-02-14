import React from 'react';
import LandingBio from '../components/Landing';
import Layout from '../components/Layout';

export function Head() {
  return <title>Hello World</title>;
}

const IndexPage = () => (
  <Layout>
    <LandingBio />
  </Layout>
);

export default IndexPage;
