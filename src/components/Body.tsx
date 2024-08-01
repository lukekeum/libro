'use client';
import styled from 'styled-components';
import QnA from './QnA';
import useQnARequest from '@/hooks/useQnARequest';

export default function Body() {
  const [qnaList] = useQnARequest();

  return (
    <Wrapper>
      {qnaList.map((v, i) => (
        <QnA key={i} {...v} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 0rem 3rem;
  margin-bottom: 0.5rem;
  overflow-y: hidden;
  flex-direction: column;
  justify-content: flex-end;
  @media only screen and (max-width: 600px) {
    margin: 0rem 1rem;
  }
`;
