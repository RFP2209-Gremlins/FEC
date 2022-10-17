import React from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';

const AnswerEntry = ({ entry }) => {

  return (
    <AnswerEntryContainer>
      <AnswerListHeader><b>A:</b> {entry.body}</AnswerListHeader>
      <PhotoContainer>
        {!entry.photos.length
          ? null
          : <Image src={entry.photos[0]}></Image>}
      </PhotoContainer>
      <AnswerListFooter>
        <AnswerListDiv>by {entry.answerer_name}, {format(parseISO(entry.date), 'MMMM dd, yyy')}</AnswerListDiv>
        <AnswerListDiv> | </AnswerListDiv>
        <AnswerListDiv>Helpful?</AnswerListDiv>
        <AddAnswer href="">Yes ({entry.helpfulness})</AddAnswer>
        <AnswerListDiv> | </AnswerListDiv>
        <Report href="">Report</Report>
      </AnswerListFooter>
    </AnswerEntryContainer>
  )
}

export default AnswerEntry;

const AnswerListHeader = styled.div`
  display: block;
  padding: 5px;
  font-size: 1rem;
`;

const AnswerListFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: .5rem .5rem 1.2rem 1.75rem;
  font-size: .9rem;
`;

const AnswerListDiv = styled.div`
  padding: 5px;
`;

const AnswerEntryContainer = styled.div`
`;

const PhotoContainer = styled.div`
`;

const AddAnswer = styled.a`
  font-size: .9rem;
`;

const Report = styled.a`
  font-size: .9rem;
`;

const Image = styled.img`
  height: 150px;
  width: 200px;
  padding: .5rem 1.75rem .5rem;
`;