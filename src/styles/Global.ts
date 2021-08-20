import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    --transition: 0.2;
  }
  html {
    font-size: 16px;
  }
  
  body {
    box-sizing: border-box;
    font-size: 16px; 
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
