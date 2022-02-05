import * as Style from './styles';
import * as Icon from '../icons';
import { MessageType, Theme } from '../types';

interface Message {
  id: string;
  message: string;
  type: MessageType;
  theme: Theme;
  duration: number;
}

interface Props {
  messages: Message[];
  closeMessage: (id: string) => void
}

export default function ToastMessage({ messages, closeMessage }: Props) {
  function getIcon(type: MessageType) {
    if (type === 'success') return <Icon.Success />;
    if (type === 'warning') return <Icon.Warning />;
    if (type === 'error') return <Icon.Error />;
    if (type === 'info') return <Icon.Info />;
  }

  return (
    <>
      {messages.map(({ id, message, theme, type, duration }) => (
        <Style.Container currentTheme={theme} messageType={type} key={id}>
          {getIcon(type)}
          <Style.Message currentTheme={theme} messageType={type}>{message}</Style.Message>
          <Style.CloseButton type="button" currentTheme={theme} messageType={type} onClick={() => closeMessage(id)}>
            <Icon.Close />
          </Style.CloseButton>
          <Style.ProgressBar currentTheme={theme} messageType={type} duration={`${duration}ms`} />
        </Style.Container>
      ))}
    </>
  );
}

