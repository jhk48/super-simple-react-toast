import { render } from 'react-dom';
import ToastMessage from './components/ToastMessage';
import { Theme } from './types';

class Toast {
  #rootElem;
  constructor() {
    this.#rootElem = document.getElementById('toast-root') as HTMLElement;
  }

  success(message: string, theme: Theme = 'light') {
    render(<ToastMessage theme={theme} message={message} type="success" />, this.#rootElem);
  }

  warning(message: string, theme: Theme = 'light') {
    render(<ToastMessage theme={theme} message={message} type="warning" />, this.#rootElem);
  }

  error(message: string, theme: Theme = 'light') {
    render(<ToastMessage theme={theme} message={message} type="error" />, this.#rootElem);
  }
  
  info(message: string, theme: Theme = 'light') {
    render(<ToastMessage theme={theme} message={message} type="info" />, this.#rootElem);
  }
}

export default new Toast();
