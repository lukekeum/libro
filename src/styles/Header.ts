import { FaLightbulb } from 'react-icons/fa';
import styled from 'styled-components';

export const Logo = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 2.25rem;
  margin-left: 0.25rem;
  @media only screen and (max-width: 600px) {
    font-size: 1.75rem;
    margin-left: 0.1rem;
  }
`;

export const Letter = styled.p`
  color: #c8c8c8;
  font-size: 1.25rem;
  @media only screen and (max-width: 600px) {
    visibility: hidden;
  }
`;

export const Help = styled(FaLightbulb)`
  width: 1.5625rem;
  height: 1.5625rem;
  color: white;
  margin-right: 1rem;
  @media only screen and (max-width: 600px) {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.1rem;
  }
`;
