import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';

const SITE_URL = 'https://timr.dev';
const SITE_NAME = 'Tim Rybicki';

function SEO({ description, title }) {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          author
          title
          image
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const staticImage = 'https://timr.dev/og-image.png';
  const pageUrl = `${SITE_URL}${pathname}`;
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={pageTitle}
      meta={[
        {
          name: `keywords`,
          content: 'tim rybicki, software developer, portfolio, blog',
        },
        {
          itemprop: `name`,
          content: pageTitle,
        },
        {
          itemprop: `description`,
          content: metaDescription,
        },
        {
          itemprop: `image`,
          content: staticImage,
        },
        {
          property: `og:url`,
          content: pageUrl,
        },
        {
          property: `og:type`,
          content: 'website',
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: staticImage,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: staticImage,
        },
      ]}
    ></Helmet>
  );
}

export default SEO;
