import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang = 'en', meta = [], keywords = [], title = '', image = '' }) {
  const { site } = useStaticQuery(
    graphql`
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
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const staticTitle = 'Tim Rybicki';
  const staticImage = 'https://timr.dev/screenshot-portfolio.png';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={staticTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          itemprop: `image`,
          content: staticImage,
        },
        {
          property: `og:image`,
          content: staticImage,
        },
        {
          name: `twitter:image`,
          content: staticImage,
        },
        {
          name: `description`,
          content: metaDescription,
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
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: staticTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  );
}

export default SEO;
