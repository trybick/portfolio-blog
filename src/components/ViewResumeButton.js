import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';
import { GrDocumentPdf } from 'react-icons/gr';

const resumeHref = 'https://drive.google.com/file/d/1t1BnEI714ydFMA7APf4tkwcCHJEBWzpd/edit';

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

const ViewResumeButton = () => (
  <ResumeLinkContainer>
    <ResumeLink href={resumeHref} target="_blank" rel="noreferrer">
      <Button
        leftIcon={GrDocumentPdf}
        size="sm"
        variant="ghost"
        backgroundColor="white"
        color="black"
        _focus={{ boxShadow: '0' }}
        _hover={{ bg: '#ebedf0', cursor: 'pointer' }}
      >
        View Resume
      </Button>
    </ResumeLink>
  </ResumeLinkContainer>
);

export default ViewResumeButton;
