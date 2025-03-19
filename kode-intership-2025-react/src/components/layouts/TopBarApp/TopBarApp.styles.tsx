import styled from 'styled-components';

export const TopBarAppContainer = styled.div<{
  $bgColor?: string;
}>`
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 16px;

  background-color: ${({ $bgColor, theme }) =>
    $bgColor ? $bgColor : theme.primary};
  transition: background-color 0.3s ease-in-out;
`;

export const TopBarAppTitle = styled.h1<{
  color?: string;
}>`
  width: fit-content;
  font-weight: 700;
  color: ${({ color, theme }) => (color ? color : theme.textPrimary)};
  font-size: 24px;
  line-height: 28px;
  padding: 8px 24px 12px 24px;
  transition: color 0.3s ease-in-out;
`;

export const TopBarAppText = styled.p`
  width: 100%;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: white;
  padding: 16px 24px;
`;
