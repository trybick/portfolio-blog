import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, title }) {
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
  const staticTitle = 'Tim Rybicki';
  const staticImage = 'https://timr.dev/screenshot-portfolio.png';

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={staticTitle}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `keywords`,
          content: 'tim rybicki, software developer, portfolio, blog',
        },
        //  Google / Search Engine Tags
        {
          itemprop: `name`,
          content: staticTitle,
        },
        {
          itemprop: `description`,
          content: metaDescription,
        },
        {
          itemprop: `image`,
          content: staticImage,
        },
        // Facebook Meta Tags
        {
          property: `og:url`,
          content: 'https://timr.dev',
        },
        {
          property: `og:type`,
          content: 'website',
        },
        {
          property: `og:title`,
          content: staticTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: staticImage,
        },
        // Twitter Meta Tags
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: staticTitle,
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
