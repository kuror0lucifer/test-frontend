import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

export const UserWrapper = styled.div`
  width: 343px;
  height: 84px;
  display: flex;

  align-items: center;
  gap: 16px;
`;

export const UserContentContainer = styled.div<{
  $gap?: number;
  $flexDirection?: string;
  $alignItems?: string;
}>`
  width: fit-content;
  height: auto;
  display: flex;

  align-items: ${props => props.$alignItems || 'flex-start'};
  gap: ${props => props.$gap || 6}px;
  flex-direction: ${props => props.$flexDirection || 'column'};
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
  fontSize: number;
  color: string;
  fontWeight: number;
  $lineHeight: number;
}>`
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.$lineHeight}px;
`;
