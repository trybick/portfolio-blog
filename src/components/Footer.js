import React from 'react';
import styled from '@emotion/styled';
import { Tooltip } from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaFileLines } from 'react-icons/fa6';
import theme from '../@chakra-ui/gatsby-plugin/theme';
import { resumeHref } from './ViewResumeButton';

const socialLinks = [
  { label: 'GitHub', tooltip: 'GitHub', href: 'https://github.com/trybick', Icon: FaGithub, size: 22 },
  { label: 'LinkedIn', tooltip: 'LinkedIn', href: 'https://www.linkedin.com/in/tim-rybicki/', Icon: FaLinkedin, size: 22 },
  { label: 'YouTube', tooltip: 'YouTube', href: 'https://www.youtube.com/celtic426', Icon: FaYoutube, size: 22 },
  { label: 'Resume', tooltip: 'View resume', href: resumeHref, Icon: FaFileLines, size: 19 },
  { label: 'Email', tooltip: 'Email me', href: 'mailto:devtimr@gmail.com', Icon: FaEnvelope, size: 22 },
];

const FooterContainer = styled.footer`
  padding: 0 0 24px;
`;

const IconRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const IconLink = styled.a`
  display: inline-flex;
  color: ${theme.colors.gray} !important;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.highlight} !important;
  }
`;

const Footer = () => (
  <FooterContainer>
    <IconRow>
      {socialLinks.map(({ label, tooltip, href, Icon, size }) => (
        <Tooltip key={label} label={tooltip} hasArrow openDelay={100}>
          <IconLink href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon size={size} />
          </IconLink>
        </Tooltip>
      ))}
    </IconRow>
  </FooterContainer>
);

export default Footer;
