import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { animated, useSpring } from 'react-spring';

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`;

const Content = styled.div`
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.4rem;
  line-height: 26px;
  max-width: 220px;
  margin: 8px auto;
`;

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
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
            </Content>
          </animated.div>
        </OuterContainer>
      )}
    />
  );
};

export default LandingBio;
