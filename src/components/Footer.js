import React from 'react';
import styled from '@emotion/styled';
// import { Box } from '@chakra-ui/react';
// import { DiReact } from 'react-icons/di';
import theme from '../@chakra-ui/gatsby-plugin/theme';

const FooterContainer = styled.footer`
  padding-bottom: 30px;
  font-size: 1.2rem;
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
    background-color: ${theme.colors.highlight};
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const FirstContactLink = styled(ContactLink)`
  margin-left: 0;
`;

// const CityContainer = styled.span`
//   margin-left: 0.8px;
// `;

const Footer = () => (
  <FooterContainer>
    <TopRow>
      <FirstContactLink href="https://github.com/trybick" target="_blank" rel="noreferrer">
        GitHub
      </FirstContactLink>
      <ContactLink href="https://www.linkedin.com/in/tim-rybicki/" target="_blank" rel="noreferrer">
        LinkedIn
      </ContactLink>
      <ContactLink href="https://www.youtube.com/celtic426" target="_blank" rel="noreferrer">
        YouTube
      </ContactLink>
    </TopRow>

    {/* <FooterRow>
      <Box as={DiReact} w="24.5px" verticalAlign="middle" />
      <CityContainer>Boston {new Date().getFullYear()}</CityContainer>
    </FooterRow> */}
  </FooterContainer>
);

export default Footer;
