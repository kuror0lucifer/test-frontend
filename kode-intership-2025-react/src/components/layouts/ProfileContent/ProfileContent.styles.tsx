import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 8px 16px 0 16px;

  background-color: ${({ theme }) => theme.primary};
  transition: background-color 0.3s ease-in-out;
`;

export const ContentWrapper = styled.div<{
  $justifyContent: string;
}>`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: center;
  padding: 20px 2px;

  &:first-child {
    border-bottom: 1px solid #f7f7f8;
  }
`;

export const InfoContainer = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
`;

export const InfoText = styled.span<{
  color?: string;
  cursor?: string;
  $phone?: boolean;
}>`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ color, theme }) => (color ? color : theme.textPrimary)};
  cursor: ${({ cursor }) => cursor};
  text-decoration: ${({ $phone }) => $phone && 'none'};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ $phone }) => $phone && '#6534ff'};
  }

  span,
  span a {
    text-decoration: none;
  }
`;
