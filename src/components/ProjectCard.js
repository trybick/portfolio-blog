import React from 'react';
import styled from '@emotion/styled';
import { Box, Popover, PopoverTrigger, PopoverContent, Link } from '@chakra-ui/react';
import { FaGithub, FaGlobeAmericas } from 'react-icons/fa';
import theme from '../@chakra-ui/gatsby-plugin/theme';

const Card = styled.div`
  border-radius: 5px;
  padding: 0.85rem;
  height: 100%;
  position: relative;
  border: 1px solid ${theme.colors.gray};
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 11px;
`;

const Title = styled(Link)`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  line-height: unset;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    text-decoration-color: ${theme.colors.highlight};
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }
`;

const Icons = styled.div`
  display: flex;

  svg {
    margin-left: 8px;

    :hover {
      color: grey;
    }
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 21px;
  margin-bottom: 1.1rem;
  color: ${theme.colors.primary};
`;

const IconWithPopover = ({ icon, link, iconText, popoverWidth }) => (
  <Popover trigger="hover">
    <PopoverTrigger>
      <a href={link} target="_blank" rel="noreferrer">
        {icon}
      </a>
    </PopoverTrigger>

    <PopoverContent
      backgroundColor={theme.colors.primary}
      border="0"
      color={theme.colors.background}
      fontSize="14px"
      fontWeight="bold"
      height="30px"
      paddingX="6px"
      width={popoverWidth}
      zIndex={4}
    >
      <Box p={1}>{iconText}</Box>
    </PopoverContent>
  </Popover>
);

const ProjectCard = ({ project: { name, description, githubLink, liveLink } }) => (
  <Card key={name}>
    <TopRow>
      <Title href={liveLink} target="_blank" rel="noreferrer">
        {name}
      </Title>
      <Icons>
        <IconWithPopover
          icon={<FaGlobeAmericas w="1.05rem" />}
          iconText="View Project"
          link={liveLink}
          popoverWidth="103px"
        />
        <IconWithPopover
          icon={<FaGithub w="1.05rem" />}
          iconText="View Code"
          link={githubLink}
          popoverWidth="91px"
        />
      </Icons>
    </TopRow>

    <Description>{description}</Description>
  </Card>
);

export default ProjectCard;
