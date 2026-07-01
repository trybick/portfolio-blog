import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';

const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

function SEO({ description, title }) {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          author
          title
          seoTitle
          siteName
          image
          imageAlt
          siteUrl
        }
      }
    }
  `);

  const { siteMetadata } = site;
  const metaDescription = description || siteMetadata.description;
  const ogImage = `${siteMetadata.siteUrl}/${siteMetadata.image}`;
  const pageUrl = `${siteMetadata.siteUrl}${pathname}`;
  const isHomePage = pathname === '/' || pathname === '';
  const pageTitle = isHomePage
    ? siteMetadata.seoTitle
    : title
      ? `${title} | ${siteMetadata.siteName}`
      : siteMetadata.siteName;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={pageTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
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
          content: ogImage,
        },
        {
          property: `og:site_name`,
          content: siteMetadata.siteName,
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
          content: ogImage,
        },
        {
          property: `og:image:alt`,
          content: siteMetadata.imageAlt,
        },
        {
          property: `og:image:width`,
          content: String(OG_IMAGE_WIDTH),
        },
        {
          property: `og:image:height`,
          content: String(OG_IMAGE_HEIGHT),
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
          content: ogImage,
        },
        {
          name: `twitter:image:alt`,
          content: siteMetadata.imageAlt,
        },
      ]}
    ></Helmet>
  );
}

export default SEO;
