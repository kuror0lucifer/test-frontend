import styled from 'styled-components';
import { UserAvatar } from '../UserCard';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  background-color: #f7f7f8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  padding: 72px 0 24px 0;
`;

export const Avatar = styled(UserAvatar).attrs({
  width: 104,
  height: 104,
})`
  border-radius: 64px;
`;
