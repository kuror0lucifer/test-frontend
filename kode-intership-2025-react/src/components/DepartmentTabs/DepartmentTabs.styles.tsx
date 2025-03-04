import styled from 'styled-components';

export const TabsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: baseline;
  align-items: flex-start;
  padding-left: 16px;
  padding-top: 8px;
  border-bottom: 1px solid #c3c3c6;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TabsContent = styled.span<{
  $isActive: boolean;
}>`
  position: relative;
  width: fit-content;
  height: auto;
  padding: 8px 12px;
  color: ${props => (props.$isActive ? '#050510' : '#97979B')};
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  transition: color 0.1s ease-out;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #6534ff;
    transform: scaleX(${props => (props.$isActive ? 1 : 0)});
    transform-origin: center;
    transition: transform 0.2s ease-out;
  }

  &:hover {
    &::after {
      transform: scaleX(${props => (props.$isActive ? 1 : 0.2)});
    }
  }
`;
