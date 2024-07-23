import { isLoading } from '@/atom/isLoading';
import { Input, SendIcon, UserIcon } from '@/styles/Footer';
import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

export default function Footer() {
  const [searchValue, setSearchValue] = useState('');
  const isAnswerLoading = useRecoilValue(isLoading);

  const onChangeEvent: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setSearchValue(e.currentTarget.value);
    },
    []
  );

  const sendQuestion: FormEventHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (isAnswerLoading) {
        toast.error('지금 AI가 다른 질문을 답변하고있어요');
        return;
      }
      setSearchValue('');
      // TODO: Add sending Question method
    },
    [isAnswerLoading]
  );

  return (
    <Wrapper>
      <Form onSubmit={sendQuestion}>
        <UserIcon />
        <Input
          placeholder='무엇이든 물어보세요! 예시) 서평, 책 목록 ...'
          onChange={onChangeEvent}
          value={searchValue}
        />
        <SendIcon type='submit' />
      </Form>
    </Wrapper>
  );
}

const Form = styled.form`
  display: flex;
  width: 100%;
  background: white;
  align-items: center;
  margin: 1.875rem 3rem;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: row;
`;
