import styled from 'styled-components';
import Loading from './Loading';
import { FaBookOpen, FaUserAlt } from 'react-icons/fa';

interface MessageProps {
  type: 'user' | 'bot';
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

const Icon = styled.div``;

const Msg = styled.div``;

const MessageWrapper = styled.div``;

const Sender = styled.p``;

const Wrapper = styled.div``;
