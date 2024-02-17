import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import projectsConfig from '../config/projects';

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const ProjectGroupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.4rem;
  margin-bottom: 34px;

  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PortfolioPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Content>
        <Heading as="h1">Projects</Heading>
        {projectsConfig.map(item => (
          <Flex key={item.category} flexDirection="column">
            <Heading as="h3" size="md" mb="12px">
              {item.category}
            </Heading>
            <ProjectGroupContainer>
              {item.projects.map(project => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </ProjectGroupContainer>
          </Flex>
        ))}
      </Content>
    </Layout>
  );
};

export default PortfolioPage;
