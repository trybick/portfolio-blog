import React from 'react';
import styled from '@emotion/styled';
import gatsbyLogo from '../images/gatsby-icon.png';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
`;

const GitHubLink = styled.a`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const GatsbyLink = styled.a`
  margin-left: 5px;
`;

const Footer = () => (
  <>
    <FooterContainer>
      <GitHubLink href="https://github.com/niklasmtj/gatsby-starter-julia">GitHub</GitHubLink>
    </FooterContainer>
  </>
);

export default Footer;
