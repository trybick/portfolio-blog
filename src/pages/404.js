import React from 'react';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';

export function Head() {
  return <PageHead title="Not Found" />;
}

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
