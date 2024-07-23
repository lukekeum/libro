import { FaPaperPlane, FaUserAlt } from 'react-icons/fa';
import styled from 'styled-components';

export const UserIcon = styled(FaUserAlt)`
  color: #272727;
  width: 1.25rem;
  height: 1.25rem;
  background-color: white;
  margin: 0rem 0.8rem;
`;

export const Input = styled.input`
  color: #272727;
  font-size: 1rem;
  font-weight: semi-bold;
  height: 3rem;
  padding: 0.05rem;
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const SendIcon = styled(FaPaperPlane)`
  color: #272727;
  margin: 0rem 0.8rem;
  width: 1.25rem;
  height: 1.25rem;
  &:hover {
    cursor: pointer;
  }
`;
