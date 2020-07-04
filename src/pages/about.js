import React from 'react';
import styled from '@emotion/styled';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/core';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const resumeHref = 'https://drive.google.com/file/d/1t1BnEI714ydFMA7APf4tkwcCHJEBWzpd/edit';

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const PageTitle = styled.h1`
  margin-bottom: 4px;
`;

const ResumeLinkContainer = styled.div`
  text-align: right;
  margin-bottom: 22px;

  @media screen and (max-width: 450px) {
    text-align: left;
    margin: 20px 0;
  }
`;

const ResumeLink = styled.a`
  text-decoration: none;
`;

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Content>
        <PageTitle>About</PageTitle>
        <ResumeLinkContainer>
          <ResumeLink href={resumeHref} target="_blank" rel="noreferrer">
            <Button
              leftIcon="chevron-right"
              size="sm"
              variant="ghost"
              variantColor="white"
              _hover={{ bg: '#ebedf0', cursor: 'pointer' }}
            >
              View Resume
            </Button>
          </ResumeLink>
        </ResumeLinkContainer>

        <p>
          Hey there, I'm Tim and I'm a software developer specializing in React.js and JavaScript. I
          enjoy finding fast and simple ways of doing things. My other passions are playing music,
          running, and building computers.
        </p>
        <p>More to come soon</p>

        <Box
          borderRadius=".025rem"
          border="1px solid"
          borderColor="rgb(226, 232, 240)"
          padding=".75rem"
          margin="0 auto"
          maxWidth="600px"
        >
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionHeader
                backgroundColor="white"
                borderColor="rgb(226, 232, 240)"
                borderRightWidth="0"
                borderLeftWidth="0"
                borderBottomWidth="0"
                borderTopWidth="1px"
                outline="none !important"
              >
                <Box flex="1" textAlign="left">
                  Music Artists
                </Box>
                <AccordionIcon />
              </AccordionHeader>
              <AccordionPanel pb={2}>
                <List spacing={2}>
                  <ListItem>
                    <ListIcon icon="arrow-forward" />
                    Radiohead
                  </ListItem>
                  <ListItem>Muse</ListItem>
                  <ListItem>Hammock</ListItem>
                  <ListItem>Tame Impala</ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader
                backgroundColor="white"
                borderColor="rgb(226, 232, 240)"
                borderRightWidth="0"
                borderLeftWidth="0"
                borderBottomWidth="0"
                borderTopWidth="1px"
              >
                <Box flex="1" textAlign="left">
                  Songs
                </Box>
                <AccordionIcon />
              </AccordionHeader>
              <AccordionPanel pb={2}>
                <List styleType="disc" spacing={2}>
                  <ListItem>When I Was Done Dying - Dan Deacon</ListItem>
                  <ListItem>Weird Fishes - Radiohead</ListItem>
                  <ListItem>I Can Almost See You - Hammock</ListItem>
                  <ListItem>Glósóli - Sigur Ros</ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader
                backgroundColor="white"
                borderColor="rgb(226, 232, 240)"
                borderRightWidth="0"
                borderLeftWidth="0"
                borderBottomWidth="0"
                borderTopWidth="1px"
              >
                <Box flex="1" textAlign="left">
                  Movies
                </Box>
                <AccordionIcon />
              </AccordionHeader>
              <AccordionPanel pb={2}>
                <List styleType="disc" spacing={2}>
                  <ListItem>Only Lovers Left Alive</ListItem>
                  <ListItem>mid90s</ListItem>
                  <ListItem>Slow West</ListItem>
                  <ListItem>Coherence</ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader
                backgroundColor="white"
                borderColor="rgb(226, 232, 240)"
                borderRightWidth="0"
                borderLeftWidth="0"
                borderBottomWidth="0"
                borderTopWidth="1px"
              >
                <Box flex="1" textAlign="left">
                  Podcasts
                </Box>
                <AccordionIcon />
              </AccordionHeader>
              <AccordionPanel pb={2}>
                <List styleType="disc" spacing={2}>
                  <ListItem>Syntax FM</ListItem>
                  <ListItem>Darknet Diaries</ListItem>
                  <ListItem>Dan Carlin's Hardcore History</ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Content>
    </Layout>
  );
};

export default AboutPage;
