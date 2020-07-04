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
import favorites from '../config/favorites';

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
      {favorites.map(category => (
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
              {category.header}
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={2}>
            <List spacing={2}>
              {category.items.map(item => (
                <ListItem>
                  <ListIcon icon="arrow-forward" />
                  {item}
                </ListItem>
              ))}
            </List>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  </Box>
);

export default FavoritesAccordion;
