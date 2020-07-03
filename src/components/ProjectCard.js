import React from 'react';
import styled from '@emotion/styled';
import { FaGithub, FaGlobeAmericas } from 'react-icons/fa';

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
  margin-bottom: 10px;
`;

const Title = styled.h4`
  font-size: 1rem;
  margin: 0;
  line-height: unset;
`;

const Icons = styled.div`
  svg {
    margin-left: 8px;
  }
`;

const Year = styled.p`
  font-size: 0.8rem;
  margin: 0;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 18px;
  margin-bottom: 1.2rem;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Framework = styled.p`
  font-size: 0.8rem;
  margin: 0;
  font-style: italic;
`;

const ProjectCard = ({ project: { name, description, year, framework, githubLink, liveLink } }) => (
  <Card key={name}>
    <TopRow>
      <Title>{name}</Title>
      <Icons>
        <a href={githubLink} target="_blank" rel="noreferrer">
          <FaGithub size="1rem" />
        </a>
        <a href={liveLink} target="_blank" rel="noreferrer">
          <FaGlobeAmericas size="1rem" />
        </a>
      </Icons>
    </TopRow>

    <Description>{description}</Description>

    <BottomRow>
      <Year>{year}</Year>
      <Framework>{framework}</Framework>
    </BottomRow>
  </Card>
);

export default ProjectCard;
