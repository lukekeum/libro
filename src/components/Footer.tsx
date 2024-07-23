import { Input, SendIcon, UserIcon } from '@/styles/Footer';
import {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useState,
} from 'react';
import styled from 'styled-components';

export default function Footer() {
  const [searchValue, setSearchValue] = useState('');

  const onChangeEvent: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setSearchValue(e.currentTarget.value);
    },
    []
  );

  const sendQuestion: MouseEventHandler = useCallback((e) => {
    // TODO: add sendQuestion
  }, []);

  return (
    <Wrapper>
      <Div>
        <UserIcon />
        <Input
          placeholder='무엇이든 물어보세요! 예시) 서평, 책 목록 ...'
          onChange={onChangeEvent}
        />
        <SendIcon onClick={sendQuestion} />
      </Div>
    </Wrapper>
  );
}

const Div = styled.div`
  margin: 1.875rem 3rem;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
`;
