import styled from 'styled-components';

export const SkeletonWrapper = styled.div`
  width: 343px;
  height: 84px;
  display: flex;
  justify-content: baseline;
  align-items: center;
  gap: 16px;
`;

export const SkeletonContentContainer = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  justify-content: baseline;
  align-items: flex-start;
  gap: 6px;
  flex-direction: column;
`;
