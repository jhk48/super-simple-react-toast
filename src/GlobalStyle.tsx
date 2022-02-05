import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bgColor};
  }

  #root {
    position: relative;
  }

  #toast-root {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;
