import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';
import { DiReact } from 'react-icons/di';

const FooterContainer = styled.footer`
  padding-bottom: 30px;
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: center;
`;

const TopRow = styled(FooterRow)`
  margin-bottom: 16px;
`;

const ContactLink = styled.a`
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

const CityContainer = styled.span`
  margin-left: 2px;
`;

const Footer = () => (
  <FooterContainer>
    <TopRow>
      <ContactLink href="https://github.com/trybick">GitHub</ContactLink>
      <ContactLink href="https://www.linkedin.com/in/tim-rybicki/">LinkedIn</ContactLink>
      <ContactLink href="https://www.youtube.com/celtic426">YouTube</ContactLink>
    </TopRow>

    <FooterRow>
      <Box as={DiReact} size="24px" verticalAlign="middle" />
      <CityContainer>Boston, MA {new Date().getFullYear()}</CityContainer>
    </FooterRow>
  </FooterContainer>
);

export default Footer;
