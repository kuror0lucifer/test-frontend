import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;

    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  body {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    color: #050510;

    margin-top: 8px;

    
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
