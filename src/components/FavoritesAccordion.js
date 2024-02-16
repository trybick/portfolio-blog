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
import { MdArrowForward } from 'react-icons/md';
import favorites from '../config/favorites';
import theme from '../@chakra-ui/gatsby-plugin/theme';

const FavoritesTitle = styled.h4`
  text-align: center;
  margin: 40px 0 12px;
`;

const CategoryTitle = styled.span`
  margin-left: 8px;
  vertical-align: middle;
`;

const FavoritesAccordion = () => (
  <>
    <FavoritesTitle>Some of my interests:</FavoritesTitle>
    <Box borderRadius=".25rem" padding=".75rem" margin="0 auto 20px" maxWidth="500px">
      <Accordion allowToggle defaultIndex={-1}>
        {favorites.map(category => (
          <AccordionItem key={category.title}>
            <AccordionButton
              cursor="pointer"
              backgroundColor={theme.colors.background}
              color={theme.colors.primary}
              borderRightWidth="0"
              borderLeftWidth="0"
              borderBottomWidth="0"
              borderTopWidth="1px"
              pl={3}
              pr={3}
              _focus={{ boxShadow: '0' }}
            >
              <Box flex="1" textAlign="left">
                <Box
                  as={category.icon}
                  w="15px"
                  verticalAlign="middle"
                  display="inline !important"
                />
                <CategoryTitle>{category.title}</CategoryTitle>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={0} pt={2} pl={0}>
              <List spacing={2} alignItems="center" id="lllll">
                {category.items.map(item => (
                  <ListItem key={item.name} fontSize="16px">
                    <ListIcon as={MdArrowForward} w="16px" verticalAlign="sub" />
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
