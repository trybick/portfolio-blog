import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

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
  color: #606060;
`;

const PostTitle = styled.h2`
  background-image: linear-gradient(rgba(255, 250, 150, 0.8), rgba(255, 250, 150, 0.8));
  background-size: 100% 0em;
  background-repeat: no-repeat;
  background-position: 0px 88%;
  font-size: 1.8rem;
  transition: background-size 0.25s ease-in 0s;
  margin: 0;

  :hover {
    background-size: 100% 88%;
  }
`;

const MidHeader = styled.div`
  margin: 4px 0;
`;

const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
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
          <MidHeader>
            <CreatedDate>{node.frontmatter.date}</CreatedDate>
            <ReadingTime> - {node.fields.readingTime.text}</ReadingTime>
          </MidHeader>
          <p>{node.excerpt}</p>
        </Link>
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
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`;
