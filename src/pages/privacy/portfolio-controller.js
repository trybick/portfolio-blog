import React from 'react';
import styled from '@emotion/styled';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const PageTitle = styled.h1`
  margin-bottom: 24px;
`;

const PortfolioControllerPrivacyPage = () => {
  return (
    <Layout>
      <SEO title="Portfolio Controller Privacy Policy" />
      <Content>
        <PageTitle>Portfolio Controller Privacy Policy</PageTitle>

        <>
          <p>Effective date: 2026-05-31</p>
          <p>
            <strong>Short version:</strong> This extension does not collect, store, transmit, or
            share any data of any kind. It runs entirely in your browser and communicates with no
            external servers.
          </p>
          <p>
            <strong>Overview</strong>
          </p>
          <p>
            Portfolio Controller is a Chrome browser extension that allows users to reorder the
            display of accounts on the Fidelity portfolio page. It is not affiliated with, endorsed
            by, or associated with Fidelity Investments or any Fidelity entity.
          </p>
          <p>
            <strong>Data Collection</strong>
          </p>
          <p>The Extension collects no data whatsoever. Specifically:</p>
          <ul>
            <li>No personal information is collected</li>
            <li>No financial account information is collected, read, or stored</li>
            <li>No browsing history or activity is recorded</li>
            <li>No analytics or usage telemetry is gathered</li>
            <li>No cookies are set or read beyond what the browser manages natively</li>
          </ul>
          <p>
            <strong>Data Transmission</strong>
          </p>
          <p>
            The Extension makes no network requests of its own. It does not transmit any data to any
            server, third party, or remote endpoint. All operations occur locally within your
            browser session.
          </p>
          <p>
            <strong>Local Storage</strong>
          </p>
          <p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            The Extension may use Chrome's local storage API solely to persist your preferred
            account ordering between sessions. This data remains on your device only, is never
            transmitted off your machine, and can be cleared at any time via Chrome's extension
            storage settings.
          </p>
          <p>
            <strong>Third-Party Services</strong>
          </p>
          <p>
            The Extension integrates with no third-party services, SDKs, analytics platforms, or
            advertising networks.
          </p>
          <p>
            <strong>Permissions</strong>
          </p>
          <p>
            The Extension requests only the permissions necessary to function. Host permissions are
            scoped to the Fidelity domain for the sole purpose of reading and modifying the page's
            DOM to reorder account display. No data observed on that page is transmitted elsewhere.
          </p>
          <p>
            <strong>Children's Privacy</strong>
          </p>
          <p>
            The Extension is not directed at children under the age of 13 and does not knowingly
            collect information from any users, regardless of age.
          </p>
          <p>
            <strong>Changes to This Policy</strong>
          </p>
          <p>
            If the Extension's data practices change in the future, this policy will be updated with
            a new effective date. Continued use of the Extension after any update constitutes
            acceptance of the revised policy.
          </p>
          <p>
            <strong>Contact</strong>
          </p>
          <p>
            Questions about this privacy policy can be directed to:
            <br />
            Tim Rybicki
            <br />
            devtimr@gmail.com
            <br />
            timr.dev
          </p>
        </>
      </Content>
    </Layout>
  );
};

export default PortfolioControllerPrivacyPage;
