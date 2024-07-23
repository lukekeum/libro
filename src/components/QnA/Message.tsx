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
        {msg ? <Msg>{msg}</Msg> : <Loading />}
      </MessageWrapper>
    </Wrapper>
  );
}

const Icon = styled.div`
  color: white;
  width: 1.25rem;
  height: 1.25rem;
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
  margin-bottom: 0.25rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;
