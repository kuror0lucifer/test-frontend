import styled from 'styled-components';

export const ContentWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 161px);
  padding: 16px 16px;
  display: flex;

  align-items: flex-start;

  flex-direction: column;

  background-color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease-in-out;
`;
