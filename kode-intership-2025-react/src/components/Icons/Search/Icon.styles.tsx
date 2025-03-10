import styled from 'styled-components';

export const Svg = styled.svg<{
  cursor?: string;
  $isActive?: boolean;
}>`
  fill: ${({ $isActive, theme }) =>
    $isActive ? theme.optional : theme.search.icon};

  transition: fill 0.3s ease-in-out;

  cursor: ${props => props.cursor};
`;
