import React from 'react';
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
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem;
  margin: 40px 0 50px;

  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PortfolioPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Content>
        <h1>Projects</h1>
        <ProjectGroupContainer>
          {projectsConfig.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </ProjectGroupContainer>
      </Content>
    </Layout>
  );
};

export default PortfolioPage;
