import styled from 'styled-components';
import { UserAvatar } from '../../ui/UserCard';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  background-color: ${({ theme }) => theme.additional};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  padding: 72px 0 24px 0;
  transition: background-color 0.3s ease-in-out;
`;

export const Avatar = styled(UserAvatar).attrs({
  width: 104,
  height: 104,
})`
  border-radius: 64px;
  box-shadow: 0px 8px 12px 0px rgba(22, 30, 52, 0.08),
    0px 1px 5px 0px rgba(22, 30, 52, 0.04);
`;
