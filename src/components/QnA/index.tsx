'use client';
import styled from 'styled-components';
import BorderLine from './BorderLine';
import Message from './Message';

interface QnAProps {
  q: string;
  a?: string;
  date: Date;
}

export default function QnA({ q, a, date }: QnAProps) {
  return (
    <Wrapper>
      <BorderLine date={date} />
      <Message type='user' msg={q} />
      <Message type='libro' msg={a} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.125rem;
`;
