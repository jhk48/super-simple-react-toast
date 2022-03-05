import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    width: 100%;
    height: 100%;

    --colorBaseBlueGray: 210, 17%;
    --white: hsla(0, 0%, 100%);
    --dark: hsla(0, 0%, 0%);
    --toastSuccessBase: 143, 88%;
    --toastWarningBase: 43, 86%;
    --toastInfoBase: 207, 90%;
    --toastErrorBase: 9, 83%;
  }

  html[data-theme='light'] {
    --bodyBgColor: hsla(var(--colorBaseBlueGray), 98%);
    --textColor: var(--dark);
    --toastSuccessBgColor: hsla(var(--toastSuccessBase), 40%);
    --toastSuccessProgressBarColor: hsla(var(--toastSuccessBase), 75%);
    --toastWarningBgColor: hsla(var(--toastWarningBase), 57%);
    --toastWarningProgressBarColor: hsla(var(--toastWarningBase), 29%);
    --toastWarningTextColor: hsla(var(--toastWarningBase), 6%);
    --toastInfoBgColor: hsla(var(--toastInfoBase), 50%);
    --toastInfoProgressBarColor: hsla(var(--toastInfoBase), 78%);
    --toastErrorBgColor: hsla(var(--toastErrorBase), 61%);
    --toastErrorProgressBarColor: hsla(var(--toastErrorBase), 84%);
  }

  html[data-theme='dark'] {
    --bodyBgColor: hsla(var(--colorBaseBlueGray), 12%);
    --textColor: var(--white);
    --toastSuccessBgColor: hsla(var(--toastSuccessBase), 33%);
    --toastSuccessProgressBarColor: hsla(var(--toastSuccessBase), 63%);
    --toastWarningBgColor: hsla(var(--toastWarningBase), 48%);
    --toastWarningProgressBarColor: hsla(var(--toastWarningBase), 78%);
    --toastWarningTextColor: hsla(var(--toastWarningBase), 10%);
    --toastInfoBgColor: hsla(var(--toastInfoBase), 46%);
    --toastInfoProgressBarColor: hsla(var(--toastInfoBase), 82%);
    --toastErrorBgColor: hsla(var(--toastErrorBase), 52%);
    --toastErrorProgressBarColor: hsla(var(--toastErrorBase), 76%);
  }

  body {
    margin: 0;
    background-color: var(--bodyBgColor);
  }

  #root {
    position: relative;
  }
`;
