'use client';
import styled from 'styled-components';
import Loading from './Loading';
import { FaBookOpen, FaUserAlt } from 'react-icons/fa';

interface MessageProps {
  type: 'user' | 'libro';
  msg?: string;
}

export default function Message({ type, msg }: MessageProps) {
  return (
    <Wrapper>
      <Icon>{type === 'user' ? <FaUserAlt /> : <FaBookOpen />}</Icon>
      <MessageWrapper>
        <Sender>{type}</Sender>
        <MessageShower type={type} msg={msg} />
      </MessageWrapper>
    </Wrapper>
  );
}

function MessageShower({ type, msg }: MessageProps) {
  return type === 'libro' ? (
    msg ? (
      msg === 'error' ? (
        <Error>Error</Error>
      ) : (
        <Msg>{msg}</Msg>
      )
    ) : (
      <Loading />
    )
  ) : (
    <Msg>{msg}</Msg>
  );
}

const Error = styled.div`
  color: #ff4f4f;
`;

const Icon = styled.div`
  color: white;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
`;

const Msg = styled.div`
  color: white;
`;

const MessageWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Sender = styled.p`
  color: white;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 0.35rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;
