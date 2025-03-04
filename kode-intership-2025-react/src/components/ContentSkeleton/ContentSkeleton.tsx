import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  SkeletonContentContainer,
  SkeletonWrapper,
} from './ContentSkeleton.styles';

export const ContentSkeleton: FC = () => {
  return (
    <SkeletonWrapper>
      <Skeleton
        circle
        width={72}
        height={72}
        baseColor='#F3F3F6'
        highlightColor='#FAFAFA'
      />
      <SkeletonContentContainer>
        <Skeleton
          width={144}
          height={16}
          borderRadius={50}
          baseColor='#F3F3F6'
          highlightColor='#FAFAFA'
        />
        <Skeleton
          width={80}
          height={12}
          borderRadius={50}
          baseColor='#F3F3F6'
          highlightColor='#FAFAFA'
        />
      </SkeletonContentContainer>
    </SkeletonWrapper>
  );
};
