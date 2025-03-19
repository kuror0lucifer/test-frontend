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

export const EmptySearchContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;

export const EmptySearchMessage = styled.h3`
  font-size: 17px;
  line-height: 22px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.textPrimary};
  transition: color 0.3s ease-in-out;
`;

export const EmptySearchAdvice = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: #97979b;
`;
