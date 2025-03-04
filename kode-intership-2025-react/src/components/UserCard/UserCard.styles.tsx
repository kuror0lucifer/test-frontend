import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

export const UserWrapper = styled.div`
  width: 343px;
  height: 84px;
  display: flex;
  justify-content: baseline;
  align-items: center;
  gap: 16px;
`;

export const UserContentContainer = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  justify-content: baseline;
  align-items: flex-start;
  gap: 6px;
  flex-direction: column;
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
    sizes: '72px',
  }
)`
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
