import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { animated, useSpring } from 'react-spring';
import { colors } from '../@chakra-ui/gatsby-plugin/theme';

const featuredProjects = [
  {
    name: 'TV Minder',
    description: 'Track your shows on one calendar',
    href: 'https://tv-minder.com/',
  },
  {
    name: 'Terminal Zoom',
    description: 'VS Code extension. 25K+ installs',
    href: 'https://marketplace.visualstudio.com/items?itemName=trybick.terminal-zoom',
  },
];

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 77vh;

  @media (max-width: 767px) {
    height: 72vh;
  }
`;

const Content = styled.div`
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 26px;
  margin: 12px auto;
`;

const NameHeader = styled.h1`
  font-size: 3.8rem;
  margin-bottom: 0;
`;

const FeaturedLabel = styled.p`
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 44px 0 12px;
  color: ${colors.gray};
`;

const FeaturedList = styled.div`
  display: inline-flex;
  flex-direction: column;
  row-gap: 9px;
  text-align: left;
`;

const FeaturedName = styled.span`
  color: ${colors.primary};
  display: inline-block;
  width: fit-content;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${colors.highlight};
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
`;

const FeaturedDescription = styled.span`
  color: ${colors.gray};
  transition: color 0.2s ease;
`;

const FeaturedItem = styled.a`
  display: grid;
  grid-template-columns: 130px 1fr;
  align-items: baseline;
  column-gap: 18px;
  font-size: 0.95rem;
  text-decoration: none;
  color: inherit;
  padding: 6px 10px;
  margin: 0 -10px;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 150, 199, 0.08);
  }

  &:hover ${FeaturedName}::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &:hover ${FeaturedDescription} {
    color: ${colors.primary};
  }

  @media (max-width: 767px) {
    grid-template-columns: 115px 1fr;
    column-gap: 12px;
  }
`;

const LandingBio = () => {
  const transitionConfig = useSpring({
    opacity: 1,
    config: { duration: 1000 },
    transform: 'translate(0px, 0px)',
    from: { opacity: 0, transform: 'translate(0px, -25px)' },
  });

  return (
    <StaticQuery
      query={graphql`
        query LandingSiteTitleQuery {
          site {
            siteMetadata {
              title
              subtitle
            }
          }
        }
      `}
      render={data => (
        <OuterContainer>
          <animated.div style={transitionConfig}>
            <Content>
              <NameHeader>{data.site.siteMetadata.title}</NameHeader>
              <Description>{data.site.siteMetadata.subtitle}</Description>
              <FeaturedLabel>Recent work</FeaturedLabel>
              <FeaturedList>
                {featuredProjects.map(project => (
                  <FeaturedItem
                    key={project.name}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FeaturedName>{project.name}</FeaturedName>
                    <FeaturedDescription>{project.description}</FeaturedDescription>
                  </FeaturedItem>
                ))}
              </FeaturedList>
            </Content>
          </animated.div>
        </OuterContainer>
      )}
    />
  );
};

export default LandingBio;
