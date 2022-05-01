import React from 'react';
import styled from '@emotion/styled';
import { Box, Popover, PopoverTrigger, PopoverContent } from '@chakra-ui/core';
import { FaGithub, FaGlobeAmericas, FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';

const Card = styled.div`
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 6px 0px;
  padding: 0.85rem;
  min-width: 190px;
  height: 100%;
  position: relative;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 11px;
`;

const Title = styled.h4`
  font-size: 1.05rem;
  margin: 0;
  line-height: unset;
  white-space: nowrap;
  overflow: hidden;
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
  font-size: 0.9rem;
  line-height: 21px;
  margin-bottom: 1.1rem;
`;

const IconWithPopover = ({ icon, link, iconText, popoverWidth }) => (
  <Popover trigger="hover">
    <PopoverTrigger>
      <a href={link} target="_blank" rel="noreferrer">
        {icon}
      </a>
    </PopoverTrigger>

    <PopoverContent
      backgroundColor="black"
      border="0"
      color="white"
      fontSize="14px"
      fontWeight="bold"
      height="34px"
      paddingX="6px"
      width={popoverWidth}
      zIndex={4}
    >
      <Box p={1}>{iconText}</Box>
    </PopoverContent>
  </Popover>
);

const ProjectCard = ({ project: { name, description, githubLink, liveLinks, mobileLinks } }) => (
  <Card key={name}>
    <TopRow>
      <Title>{name}</Title>
      <Icons>
        {liveLinks
          ? liveLinks.map(liveLink => (
              <IconWithPopover
                icon={<FaGlobeAmericas size="1.05rem" />}
                iconText="View Site"
                link={liveLink}
                popoverWidth="84px"
              />
            ))
          : mobileLinks.map(({ platform, link }) => (
              <IconWithPopover
                icon={
                  platform === 'ios' ? <FaAppStoreIos size="1rem" /> : <FaGooglePlay size="1rem" />
                }
                iconText={platform === 'ios' ? 'View App Store' : 'View Play Store'}
                link={link}
                popoverWidth="125px"
              />
            ))}
        <IconWithPopover
          icon={<FaGithub size="1.05rem" />}
          iconText="View Repo"
          link={githubLink}
          popoverWidth="92px"
        />
      </Icons>
    </TopRow>

    <Description>{description}</Description>
  </Card>
);

export default ProjectCard;
