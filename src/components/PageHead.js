import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function PageHead({ title, description }) {
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
    <>
      <title>{staticTitle}</title>
      {/* Title template example: "Tim Rybicki | Articles" */}
      <meta name="titleTemplate" content={`%s | ${title}`} />
      <meta name="name" content={staticTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="image" content={staticImage} />

      {/* Facebook */}
      <meta name="og:url" content={`https://timr.dev`} />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={staticTitle} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:image" content={staticImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={staticTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={staticImage} />

      <meta name="keywords" content={'tim rybicki, software developer, portfolio, article'} />

      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "a08f649fe2fd49b6a62fe988ab374f13"}'
      ></script>
    </>
  );
}

export default PageHead;
