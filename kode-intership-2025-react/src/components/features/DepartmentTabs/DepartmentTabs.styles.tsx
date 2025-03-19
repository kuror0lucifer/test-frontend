import styled from 'styled-components';

export const TabsWrapper = styled.ul`
  width: 100%;
  height: auto;
  display: flex;

  align-items: flex-start;
  padding-left: 16px;
  padding-top: 8px;
  border-bottom: 1px solid #c3c3c6;
  background-color: ${({ theme }) => theme.primary};
  transition: background-color 0.3s ease-in-out;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TabsContent = styled.li<{
  $isActive: boolean;
}>`
  position: relative;
  width: fit-content;
  height: auto;
  padding: 8px 12px;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.textPrimary : theme.textAdditional};
  font-size: 15px;

  font-weight: ${({ $isActive }) => ($isActive ? 600 : 500)};
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  transition: color 0.3s ease-out;

  list-style: none;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #6534ff;
    transform: scaleX(${({ $isActive }) => ($isActive ? 1 : 0)});
    transform-origin: center;
    transition: transform 0.2s ease-out;
  }

  &:hover {
    &::after {
      transform: scaleX(${({ $isActive }) => ($isActive ? 1 : 0.2)});
    }
  }

  &:active {
    &::after {
      transform: scaleX(${({ $isActive }) => ($isActive ? 1 : 0.5)});
    }
  }
`;
