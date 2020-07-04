import React from 'react';
import styled from '@emotion/styled';
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

const CategoryTitle = styled.span`
  margin-left: 5px;
  vertical-align: middle;
`;

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
            pl={3}
            pr={3}
          >
            <Box flex="1" textAlign="left">
              <Box as={category.icon} size="15px" verticalAlign="middle" />
              <CategoryTitle>{category.title}</CategoryTitle>
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={0} pt={0.9} pl={2}>
            <List spacing={2}>
              {category.items.map(item => (
                <ListItem fontSize="16px">
                  <ListIcon icon="arrow-forward" size="16px" />
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
