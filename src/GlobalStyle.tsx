import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
  }
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.bgColor};
  }

  #root {
    position: relative;
  }

  #toast-root {
  }
`;
