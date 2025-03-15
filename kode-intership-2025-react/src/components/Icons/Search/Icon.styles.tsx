import styled from 'styled-components';

export const SortingSvg = styled.svg<{
  $isActive?: boolean;
}>`
  fill: ${({ $isActive, theme }) =>
    $isActive ? theme.optional : theme.search.icon};

  transition: fill 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    fill: ${({ theme }) => theme.search.hover.additional};
  }
`;

export const SearchSvg = styled.svg<{ $isFocused?: boolean }>`
  fill: ${({ $isFocused, theme }) =>
    $isFocused ? theme.search.iconFocused : theme.search.icon};

  transition: fill 0.3s ease-in-out;
`;
