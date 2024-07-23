import { useMemo } from 'react';
import styled from 'styled-components';

interface BorderLineProps {
  date: Date;
}

export default function BorderLine({ date }: BorderLineProps) {
  const processedDate = useMemo(() => {
    return `${date.getFullYear()}.${date.getMonth()}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  }, [date]);

  return (
    <Wrapper>
      <DateShower>{processedDate}</DateShower>
    </Wrapper>
  );
}

const DateShower = styled.span`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  margin: 0rem 0.625rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  &:after {
    content: '';
    flex: 1 1;
    border-bottom: 1px solid #d9d9d9;
    margin: auto;
    margin-left: 0.625rem;
  }
`;

const Wrapper = styled.div``;
