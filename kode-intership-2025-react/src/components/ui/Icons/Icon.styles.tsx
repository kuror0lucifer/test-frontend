import styled from 'styled-components';

export const Svg = styled.svg<{
  color?: string;
}>`
  fill: ${({ color, theme }) => (color ? color : theme.iconColor)};

  transition: fill 0.3s ease-in-out;
`;
