import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import theme from '../@chakra-ui/gatsby-plugin/theme';

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const PostTitle = styled.h1`
  display: inline;
  background-size: 100% 0.2em;
  background-repeat: no-repeat;
  background-position: 0px 88%;
  transition: background-size 0.25s ease-in 0s;
  line-height: 50px;
`;

const Date = styled.h3`
  margin-top: 10px;
  color: ${theme.colors.gray};
`;

const MarkdownContent = styled.div`
  a {
    text-decoration: none;
    position: relative;
    font-style: italic;
    font-weight: 800;
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;

    :hover {
      position: relative;
      background-color: ${theme.colors.highlight};
      background-size: 100% 0.2em;
      background-repeat: no-repeat;
      background-position: 0px 98%;
    }
  }

  h2 {
    margin-top: 25px;
  }
`;

const Post = ({ data: { markdownRemark: post } }) => (
  <Layout>
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
    <Content>
      <PostTitle>{post.frontmatter.title}</PostTitle>
      <Date>
        {post.frontmatter.date} - {post.timeToRead} min
      </Date>
      <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
    </Content>
  </Layout>
);

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
      timeToRead
    }
  }
`;

export default Post;
