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
  height: 100%;
  margin: 0rem 3rem;
  margin-bottom: 1rem;
  flex-direction: column;
  justify-content: flex-end;
`;
