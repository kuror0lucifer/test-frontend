import { ImgHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;

  * {
    text-decoration: none;
  }
`;

export const UserWrapper = styled.div`
  width: 343px;
  height: 84px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;

  text-decoration: none;

  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const UserContentContainer = styled.div<{
  $gap?: number;
  $flexDirection?: string;
  $alignItems?: string;
}>`
  width: fit-content;
  height: auto;
  display: flex;

  align-items: ${({ $alignItems }) => $alignItems || 'flex-start'};
  gap: ${({ $gap }) => $gap || 6}px;
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'column'};
`;

export const UserNameContainer = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const UserAvatar = styled.img.attrs<ImgHTMLAttributes<HTMLImageElement>>(
  {
    width: 72,
    height: 72,
  }
)`
  border-radius: 50%;
  object-fit: fill;
`;

export const UserText = styled.span<{
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  $lineHeight?: number;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ color, theme }) => (color ? color : theme.textPrimary)};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ $lineHeight }) => $lineHeight}px;

  transition: color 0.3s ease-in-out;
`;
