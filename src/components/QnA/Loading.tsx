'use client';
import styled, { keyframes } from 'styled-components';

export default function Loading() {
  return <LoadingDots></LoadingDots>;
}

const dotElastic = keyframes`
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1, 1.2);
  }
  75% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
`;

const dotElasticBefore = keyframes`
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1.2);
  }
  50% {
    transform: scale(1, 1);
  }
  75% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
`;

const dotElasticAfter = keyframes`
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1, 1);
  }
  75% {
    transform: scale(1, 1.2);
  }
  100% {
    transform: scale(1, 1);
  }
`;

const LoadingDots = styled.div`
  position: relative;
  left: 12px;
  width: 8px;
  height: 8px;
  border-radius: 5px;
  background-color: #fff;
  color: #9880ff;
  animation: ${dotElastic} 1s infinite linear;
  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }
  &::before {
    left: -12px;
    width: 8px;
    height: 8px;
    border-radius: 5px;
    background-color: #fff;
    color: #fff;
    animation: ${dotElasticBefore} 1s infinite linear;
  }
  &::after {
    left: 12px;
    width: 8px;
    height: 8px;
    border-radius: 5px;
    background-color: #fff;
    color: #fff;
    animation: ${dotElasticAfter} 1s infinite linear;
  }
`;
