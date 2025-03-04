import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    color: #050510;

    margin-top: 8px;
  }
`;

export default GlobalStyle;
