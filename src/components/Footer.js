import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Tooltip } from '@chakra-ui/react';
import { FaCheck, FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaFileLines } from 'react-icons/fa6';
import theme from '../@chakra-ui/gatsby-plugin/theme';
import { resumeHref } from './ViewResumeButton';

const emailAddress = 'devtimr@gmail.com';

const socialLinks = [
  { label: 'GitHub', tooltip: 'GitHub', href: 'https://github.com/trybick', Icon: FaGithub, size: 22 },
  { label: 'LinkedIn', tooltip: 'LinkedIn', href: 'https://www.linkedin.com/in/tim-rybicki/', Icon: FaLinkedin, size: 22 },
  { label: 'YouTube', tooltip: 'YouTube', href: 'https://www.youtube.com/celtic426', Icon: FaYoutube, size: 22 },
  { label: 'Email', tooltip: 'Copy email address', copyEmail: emailAddress, Icon: FaEnvelope, size: 22 },
  { label: 'Resume', tooltip: 'View resume', href: resumeHref, Icon: FaFileLines, size: 19 },
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

const iconStyles = `
  display: inline-flex;
  color: ${theme.colors.gray} !important;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.highlight} !important;
  }
`;

const IconLink = styled.a`
  ${iconStyles}
`;

const IconButton = styled.button`
  ${iconStyles}
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const CopiedIconWrapper = styled.span`
  display: inline-flex;
  color: ${theme.colors.highlight} !important;
  animation: copyPop 0.4s ease;

  @keyframes copyPop {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    60% {
      transform: scale(1.25);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }
`;

const COPIED_TIMEOUT_MS = 1600;

const Footer = () => {
  const [copiedLabel, setCopiedLabel] = useState(null);
  const copiedTimeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(copiedTimeoutRef.current), []);

  const handleCopyEmail = async (email, label) => {
    await navigator.clipboard.writeText(email);
    clearTimeout(copiedTimeoutRef.current);
    setCopiedLabel(label);
    copiedTimeoutRef.current = setTimeout(() => setCopiedLabel(null), COPIED_TIMEOUT_MS);
  };

  return (
    <FooterContainer>
      <IconRow>
        {socialLinks.map(({ label, tooltip, href, copyEmail, Icon, size }) => {
          const isCopied = copiedLabel === label;

          return (
            <Tooltip
              key={label}
              label={isCopied ? 'Copied!' : tooltip}
              hasArrow
              openDelay={100}
              isOpen={isCopied || undefined}
            >
              {copyEmail ? (
                <IconButton
                  type="button"
                  onClick={() => handleCopyEmail(copyEmail, label)}
                  aria-label={label}
                >
                  {isCopied ? (
                    <CopiedIconWrapper>
                      <FaCheck size={size} />
                    </CopiedIconWrapper>
                  ) : (
                    <Icon size={size} />
                  )}
                </IconButton>
              ) : (
                <IconLink href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon size={size} />
                </IconLink>
              )}
            </Tooltip>
          );
        })}
      </IconRow>
    </FooterContainer>
  );
};

export default Footer;
