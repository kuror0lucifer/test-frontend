import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ theme }) => theme.primary};
  transition: background-color 0.3s ease-in-out;
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.textPrimary};
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.optional};
  }
`;

export const NotFoundError = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  transition: color 0.3s ease-in-out;
`;

export const NotFoundAdvice = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  transition: color 0.3s ease-in-out;
`;
