import styled from 'styled-components';
import QnA from './QnA';

export default function Body() {
  return (
    <Wrapper>
      <QnA
        q='소설책 하나를 추천해줘'
        a='좋은 질문입니다. <삼국지>, <어쩌고> 추천드립니다.'
        date={new Date()}
      />
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
