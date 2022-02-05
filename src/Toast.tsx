import { render } from 'react-dom';
import ToastMessage from './components/ToastMessage';
import { Theme, MessageType } from './types';

interface Message {
  id: number;
  message: string;
  type: MessageType;
  theme: Theme;
}

class Toast {
  #rootElem: HTMLElement;
  #messages: Message[];
  constructor() {
    this.#rootElem = document.getElementById('toast-root') as HTMLElement;
    this.#messages = [];
  }

  #closeMessage(idToDelete: number) {
    const indexToDelete = this.#messages.findIndex(({ id }) => id === idToDelete);
    this.#messages.splice(indexToDelete, 1);
    render(<ToastMessage messages={this.#messages} closeMessage={this.#closeMessage.bind(this)} />, this.#rootElem);
  }

  success(message: string, theme: Theme = 'light') {
    this.#messages.push({
      id: this.#messages.length,
      message,
      theme,
      type: 'success'
    });

    render(<ToastMessage messages={this.#messages} closeMessage={this.#closeMessage.bind(this)} />, this.#rootElem);
  }

  warning(message: string, theme: Theme = 'light') {
    this.#messages.push({
      id: this.#messages.length,
      message,
      theme,
      type: 'warning'
    });

    render(<ToastMessage messages={this.#messages} closeMessage={this.#closeMessage.bind(this)} />, this.#rootElem);
  }

  error(message: string, theme: Theme = 'light') {
    this.#messages.push({
      id: this.#messages.length,
      message,
      theme,
      type: 'error'
    });

    render(<ToastMessage messages={this.#messages} closeMessage={this.#closeMessage.bind(this)} />, this.#rootElem);
  }
  
  info(message: string, theme: Theme = 'light') {
    this.#messages.push({
      id: this.#messages.length,
      message,
      theme,
      type: 'info'
    });

    render(<ToastMessage messages={this.#messages} closeMessage={this.#closeMessage.bind(this)} />, this.#rootElem);
  }
}

export default new Toast();
