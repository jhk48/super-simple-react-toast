import { v4 as uuid } from 'uuid';
import { render } from 'react-dom';
import ToastMessage from './components/ToastMessage';
import { Theme,  Message, ToastPosition } from './types';

class Toast {
  #rootElem: HTMLElement;
  #messages: Message[];
  #defaultDuration: number;
  constructor() {
    this.#rootElem = document.getElementById('toast-root') as HTMLElement;
    this.#messages = [];
    this.#defaultDuration = 3000;
  }

  #closeMessage(idToDelete: string) {
    const indexToDelete = this.#messages.findIndex(({ id }) => id === idToDelete);
    this.#messages.splice(indexToDelete, 1);
    render(<ToastMessage messages={this.#messages} closeMessage={this.#closeMessage.bind(this)} />, this.#rootElem);
  }

  #autoCloseMessage(duration: number, id: string) {
    setTimeout(() => {
      this.#closeMessage(id);
    }, duration, this);
  }

  success(message: string, theme: Theme = 'light', position: ToastPosition = "topLeft", duration = this.#defaultDuration) {
    const id = uuid();
    this.#messages.push({
      id,
      message,
      theme,
      type: 'success',
      duration,
      position
    });

    render(<ToastMessage messages={this.#messages} closeMessage={this.#closeMessage.bind(this)} />, this.#rootElem);
    this.#autoCloseMessage(duration, id);
  }

  warning(message: string, theme: Theme = 'light', position: ToastPosition = "topLeft", duration = this.#defaultDuration) {
    const id = uuid();
    this.#messages.push({
      id,
      message,
      theme,
      type: 'warning',
      duration,
      position
    });

    render(<ToastMessage messages={this.#messages} closeMessage={this.#closeMessage.bind(this)} />, this.#rootElem);
    this.#autoCloseMessage(duration, id);
  }

  error(message: string, theme: Theme = 'light', position: ToastPosition = "topLeft", duration = this.#defaultDuration) {
    const id = uuid();
    this.#messages.push({
      id,
      message,
      theme,
      type: 'error',
      duration,
      position
    });

    render(<ToastMessage messages={this.#messages} closeMessage={this.#closeMessage.bind(this)} />, this.#rootElem);
    this.#autoCloseMessage(duration, id);
  }
  
  info(message: string, theme: Theme = 'light', position: ToastPosition = "topLeft", duration = this.#defaultDuration) {
    const id = uuid();
    this.#messages.push({
      id,
      message,
      theme,
      type: 'info',
      duration,
      position
    });

    render(<ToastMessage messages={this.#messages} closeMessage={this.#closeMessage.bind(this)} />, this.#rootElem);
    this.#autoCloseMessage(duration, id);
  }
}

export default new Toast();
