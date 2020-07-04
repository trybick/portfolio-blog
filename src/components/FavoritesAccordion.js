import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/core';

const FavoritesAccordion = () => (
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
);

export default FavoritesAccordion;
