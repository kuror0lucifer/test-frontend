import styled from 'styled-components';

export const TopBarAppContainer = styled.div`
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 16px;

  background-color: ${({ theme }) => theme.primary};
  transition: background-color 0.3s ease-in-out;
`;

export const TopBarAppTitle = styled.h1`
  width: fit-content;
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 24px;
  line-height: 28px;
  padding: 8px 24px 12px 24px;
  transition: color 0.3s ease-in-out;
`;
