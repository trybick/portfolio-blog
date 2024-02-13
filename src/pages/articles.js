import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import theme from '../style/theme';

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const PageTitle = styled.h1`
  margin-bottom: 40px;
`;

const CreatedDate = styled.h5`
  display: inline;
  color: ${theme.colors.gray};
`;

const PostTitle = styled.h2`
  background-size: 100% 0em;
  background-repeat: no-repeat;
  background-position: 0px 88%;
  font-size: 1.8rem;
  transition: background-size 0.25s ease-in 0s;
  margin: 0;
  display: inline;

  &:hover {
    background-color: ${theme.colors.highlight};
    border-radius: 2px;
  }
`;

const MidHeader = styled.div`
  margin: 4px 0;
`;

const ReadingTime = styled.h5`
  display: inline;
  color: ${theme.colors.gray};
`;

const BlogPage = ({ data }) => {
  const parsedMarkdown = data.allMarkdownRemark.edges
    .filter(({ node }) => {
      const postDate = node.frontmatter.rawDate;
      return new Date(postDate) < new Date();
    })
    .map(({ node }) => (
      <div key={node.id}>
        <Link
          to={node.frontmatter.path}
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <PostTitle>{node.frontmatter.title}</PostTitle>
        </Link>

        <MidHeader>
          <CreatedDate>{node.frontmatter.date}</CreatedDate>
          <ReadingTime> - {node.timeToRead} min</ReadingTime>
        </MidHeader>
        <p>{node.excerpt}</p>
      </div>
    ));

  return (
    <Layout>
      <SEO title="Articles" />
      <Content>
        <PageTitle>Articles</PageTitle>
        {parsedMarkdown}
      </Content>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            rawDate: date
            path
          }
          fields {
            slug
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`;
