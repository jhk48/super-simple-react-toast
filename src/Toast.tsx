import { v4 as uuid } from 'uuid';
import { render } from 'react-dom';
import ToastMessage from './components/ToastMessage';
import { Theme, MessageType } from './types';

interface Message {
  id: string;
  message: string;
  type: MessageType;
  theme: Theme;
}

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

  success(message: string, theme: Theme = 'light', duration = this.#defaultDuration) {
    const id = uuid();
    this.#messages.push({
      id,
      message,
      theme,
      type: 'success'
    });

    render(<ToastMessage messages={this.#messages} closeMessage={this.#closeMessage.bind(this)} />, this.#rootElem);
    this.#autoCloseMessage(duration, id);
  }

  warning(message: string, theme: Theme = 'light', duration = this.#defaultDuration) {
    const id = uuid();
    this.#messages.push({
      id,
      message,
      theme,
      type: 'warning'
    });

    render(<ToastMessage messages={this.#messages} closeMessage={this.#closeMessage.bind(this)} />, this.#rootElem);
    this.#autoCloseMessage(duration, id);
  }

  error(message: string, theme: Theme = 'light', duration = this.#defaultDuration) {
    const id = uuid();
    this.#messages.push({
      id,
      message,
      theme,
      type: 'error'
    });

    render(<ToastMessage messages={this.#messages} closeMessage={this.#closeMessage.bind(this)} />, this.#rootElem);
    this.#autoCloseMessage(duration, id);
  }
  
  info(message: string, theme: Theme = 'light', duration = this.#defaultDuration) {
    const id = uuid();
    this.#messages.push({
      id,
      message,
      theme,
      type: 'info'
    });

    render(<ToastMessage messages={this.#messages} closeMessage={this.#closeMessage.bind(this)} />, this.#rootElem);
    this.#autoCloseMessage(duration, id);
  }
}

export default new Toast();
