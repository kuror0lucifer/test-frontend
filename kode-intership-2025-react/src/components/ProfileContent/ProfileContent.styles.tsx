import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 8px 16px 0 16px;
`;

export const ContentWrapper = styled.div<{
  $justifyContent: string;
}>`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: ${props => props.$justifyContent};
  align-items: center;
  padding: 20px 2px;

  &:first-child {
    border-bottom: 1px solid #f7f7f8;
  }
`;

export const Icon = styled.img.attrs<ImgHTMLAttributes<HTMLImageElement>>({
  width: 20,
  height: 20,
})``;

export const InfoContainer = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
`;

export const InfoText = styled.span<{
  color: string;
  cursor?: string;
  $phone?: boolean;
}>`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${props => props.color};
  cursor: ${props => props.cursor};
  text-decoration: ${props => props.$phone && 'none'};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${props => props.$phone && '#6534ff'};
  }

  span,
  span a {
    text-decoration: none;
  }
`;
