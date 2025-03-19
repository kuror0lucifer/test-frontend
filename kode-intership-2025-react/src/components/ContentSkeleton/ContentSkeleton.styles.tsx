import styled from 'styled-components';

export const SkeletonWrapper = styled.div`
  width: 343px;
  height: 84px;
  display: flex;

  align-items: center;
  gap: 16px;
`;

export const SkeletonContentContainer = styled.div`
  width: fit-content;
  height: auto;
  display: flex;

  align-items: flex-start;
  gap: 6px;
  flex-direction: column;
`;

export const Skeleton = styled.div<{
  width: number;
  height: number;
  baseColor: string;
  highlightColor: string;
  borderRadius: string;
}>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ borderRadius }) => borderRadius};
  overflow: hidden;
  background: ${({ baseColor }) => baseColor};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${({ baseColor }) => baseColor} 25%,
      ${({ highlightColor }) => highlightColor} 50%,
      ${({ baseColor }) => baseColor} 75%
    );
    animation: shimmer 1.5s infinite linear;
  }

  @keyframes shimmer {
    0% {
      left: -50%;
    }
    100% {
      left: 100%;
    }
  }
`;
