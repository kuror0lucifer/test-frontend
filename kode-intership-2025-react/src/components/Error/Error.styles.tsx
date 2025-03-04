import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`;

export const Icon = styled.img.attrs<ImgHTMLAttributes<HTMLImageElement>>({})`
  width: 56px;
  height: 56px;
`;

export const ErrorContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;

export const ErrorMessage = styled.h3`
  font-size: 17px;
  line-height: 22px;
  font-weight: 600;
  text-align: center;
  color: #050510;
`;

export const ErrorText = styled.span<{
  size: number;
  fontWeight: number;
  $lineHeight: number;
  color: string;
  cursor?: string;
}>`
  font-size: ${props => props.size}px;
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.$lineHeight}px;
  text-align: center;
  color: ${props => props.color};
  cursor: ${props => props.cursor};
`;
