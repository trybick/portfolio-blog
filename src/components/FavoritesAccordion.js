import React from 'react';
import styled from '@emotion/styled';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import favorites from '../config/favorites';

const FavoritesTitle = styled.h4`
  text-align: center;
  margin-top: 40px;
`;

const CategoryTitle = styled.span`
  margin-left: 8px;
  vertical-align: middle;
`;

const FavoritesAccordion = () => (
  <>
    <FavoritesTitle>Some of my favorite things!</FavoritesTitle>
    <Box
      borderRadius=".25rem"
      border="1px solid"
      borderColor="rgb(226, 232, 240)"
      padding=".75rem"
      margin="0 auto 20px"
      maxWidth="500px"
    >
      <Accordion allowToggle defaultIndex={-1}>
        {favorites.map(category => (
          <AccordionItem key={category.title}>
            <AccordionButton
              backgroundColor="white"
              borderColor="rgb(226, 232, 240)"
              borderRightWidth="0"
              borderLeftWidth="0"
              borderBottomWidth="0"
              borderTopWidth="1px"
              pl={3}
              pr={3}
              _focus={{ boxShadow: '0' }}
            >
              <Box flex="1" textAlign="left">
                <Box as={category.icon} boxSize="15px" verticalAlign="middle" />
                <CategoryTitle>{category.title}</CategoryTitle>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={0} pt={2} pl={0}>
              <List spacing={2}>
                {category.items.map(item => (
                  <ListItem key={item.name} fontSize="16px">
                    <ListIcon icon="arrow-forward" boxSize="16px" />
                    {category.title === 'Quotes' ? (
                      item.name
                    ) : (
                      <Link href={item.link} isExternal>
                        {item.name}
                      </Link>
                    )}
                  </ListItem>
                ))}
              </List>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  </>
);

export default FavoritesAccordion;
