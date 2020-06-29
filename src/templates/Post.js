import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const MarkedHeader = styled.h1`
  display: inline;
  background-image: linear-gradient(rgba(255, 250, 150, 0.8), rgba(255, 250, 150, 0.8));
  background-size: 100% 0.4em;
  background-repeat: no-repeat;
  background-position: 0px 88%;
  transition: background-size 0.25s ease-in 0s;
  line-height: 50px;
`;

const HeaderDate = styled.h3`
  margin-top: 10px;
  color: #606060;
`;

// Here is where we can style tags contained inside the markdown file
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
    &:hover {
      position: relative;
      background-image: linear-gradient(rgba(255, 250, 150, 0.8), rgba(255, 250, 150, 0.8));
      background-size: 100% 0.2em;
      background-repeat: no-repeat;
      background-position: 0px 98%;
    }
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Content>
        <MarkedHeader>{post.frontmatter.title}</MarkedHeader>
        <HeaderDate>
          {post.frontmatter.date} - {post.fields.readingTime.text}
        </HeaderDate>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
