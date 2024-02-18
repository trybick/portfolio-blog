import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import theme from '../@chakra-ui/gatsby-plugin/theme';

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`;

const SiteHeader = styled.header`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const NavLink = styled(Link)`
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.highlight};
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const HomeLink = styled(NavLink)`
  margin-left: 0;
`;

const Header = () => (
  <SiteHeader>
    <Content>
      <p>
        <HomeLink to="/">Home</HomeLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/articles">Articles</NavLink>
      </p>
    </Content>
  </SiteHeader>
);

export default Header;
