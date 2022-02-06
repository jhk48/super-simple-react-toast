import * as Style from './styles';
import * as Icon from '../icons';
import { MessageType, Message, ToastPosition } from '../types';

interface Props {
  position: ToastPosition;
  messages: Message[];
  closeMessage: (id: string) => void
}

export default function ToastMessage({ position, messages, closeMessage }: Props) {
  function getIcon(type: MessageType) {
    if (type === 'success') return <Icon.Success />;
    if (type === 'warning') return <Icon.Warning />;
    if (type === 'error') return <Icon.Error />;
    if (type === 'info') return <Icon.Info />;
  }

  return (
    <Style.ToastContainer position={position}>
      {messages.map(({ id, message, theme, type, duration }) => (
        <Style.Toast currentTheme={theme} messageType={type} key={id}>
          {getIcon(type)}
          <Style.Message currentTheme={theme} messageType={type}>{message}</Style.Message>
          <Style.CloseButton type="button" currentTheme={theme} messageType={type} onClick={() => closeMessage(id)}>
            <Icon.Close />
          </Style.CloseButton>
          <Style.ProgressBar currentTheme={theme} messageType={type} duration={`${duration}ms`} />
        </Style.Toast>
      ))}
    </Style.ToastContainer>
  );
}
