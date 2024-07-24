'use client';
import styled from 'styled-components';
import { Help, Letter, Logo } from '@/styles/Header';

export default function Header() {
  return (
    <Wrapper>
      <Div>
        <Logo>Libro</Logo>
        <Letter>대건고등학교 북카페 채팅 봇</Letter>
        <Help />
      </Div>
    </Wrapper>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 3.75rem;
  @media only screen and (max-width: 600px) {
    margin: 2rem 2.3rem;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  background-color: #272727;
`;
