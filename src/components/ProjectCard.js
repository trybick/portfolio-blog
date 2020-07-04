import React from 'react';
import styled from '@emotion/styled';
import { FaGithub, FaGlobeAmericas } from 'react-icons/fa';

const Card = styled.div`
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 6px 0px;
  padding: 0.85rem;
  min-width: 190px;
  min-height: 150px;
  height: 100%;
  position: relative;

  @media screen and (max-width: 580px) {
    min-height: 130px;
  }

  @media screen and (max-width: 450px) {
    min-height: 160px;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
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
  margin-bottom: 1.2rem;
`;

const Year = styled.p`
  font-size: 0.8rem;
  margin: 0;
  font-weight: 600;

  position: absolute;
  bottom: 0.52rem;
  left: 0.85rem;
`;

const Framework = styled.p`
  font-size: 0.8rem;
  margin: 0;
  font-style: italic;

  position: absolute;
  bottom: 0.52rem;
  right: 0.85rem;
`;

const ProjectCard = ({ project: { name, description, year, framework, githubLink, liveLink } }) => (
  <Card key={name}>
    <TopRow>
      <Title>{name}</Title>
      <Icons>
        <a href={githubLink} target="_blank" rel="noreferrer">
          <FaGithub size="1.05rem" />
        </a>
        <a href={liveLink} target="_blank" rel="noreferrer">
          <FaGlobeAmericas size="1.05rem" />
        </a>
      </Icons>
    </TopRow>

    <Description>{description}</Description>

    <div>
      <Year>{year}</Year>
      <Framework>{framework}</Framework>
    </div>
  </Card>
);

export default ProjectCard;
