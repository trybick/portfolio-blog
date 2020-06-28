import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
`;

const GatsbyLink = styled.a`
  margin-left: 5px;
`;

const Footer = () => (
  <FooterContainer>
    <p>
      © {new Date().getFullYear()}, Built with
      {` `}
    </p>
    <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink>
  </FooterContainer>
);

export default Footer;
