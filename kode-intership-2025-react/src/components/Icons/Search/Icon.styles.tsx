import styled from 'styled-components';

export const Svg = styled.svg<{
  cursor?: string;
  $isActive?: boolean;
  $isHover?: boolean;
  $isFocused?: boolean;
}>`
  fill: ${({ $isActive, theme }) =>
    $isActive ? theme.optional : theme.search.icon};

  transition: fill 0.3s ease-in-out;

  cursor: ${({ cursor }) => cursor};

  &:hover {
    fill: ${({ $isHover, theme }) =>
      $isHover ? theme.search.hover.additional : theme.search.icon};
  }

  path {
    fill: ${({ $isFocused, theme }) =>
      $isFocused ? theme.search.iconFocused : theme.search.icon};
    transition: fill 0.3s ease-in-out;
  }
`;
