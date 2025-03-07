import styled from 'styled-components';

export const Svg = styled.svg<{
  color?: string;
}>`
  fill: ${props => (props.color ? props.color : props.theme.iconColor)};

  transition: fill 0.3s ease-in-out;
`;
