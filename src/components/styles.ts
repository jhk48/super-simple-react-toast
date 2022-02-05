import styled from 'styled-components';
import { MessageType, Theme, ToastStyles } from '../types';

interface Type {
  currentTheme: Theme;
  messageType: MessageType;
}

const ToastTheme: ToastStyles = {
  light: {
    success: {
      backgroundColor: '#4CAF50',
      progressBarColor: '#CCF4CD',
      color: '#FFF1F1'
    },
    warning: {
      backgroundColor: '#FABE0C',
      progressBarColor: '#FFF6C5',
      color: '#FFFCF3'
    },
    error: {
      backgroundColor: '#FF5252',
      progressBarColor: '#FFCBCB',
      color: '#F1FFF1'
    },
    info: {
      backgroundColor: '#2196F3',
      progressBarColor: '#BDE0FB',
      color: '#F3FAFF'
    }
  },
  dark: {
    success: {
      backgroundColor: '#16B542',
      progressBarColor: '#CCF4CD',
      color: '#F1FFF1'
    },
    warning: {
      backgroundColor: '#EBB410',
      progressBarColor: '#FFF6C5',
      color: '#FFFCF3'
    },
    error: {
      backgroundColor: '#E74949',
      progressBarColor: '#FFCBCB',
      color: '#FFF1F1'
    },
    info: {
      backgroundColor: '#1D86E8',
      progressBarColor: '#BDE0FB',
      color: '#F3FAFF'
    }
  }
};

export const Container = styled.div<Type>`
  display: flex;
  align-items: center;
  width: fit-content;
  min-height: 30px;
  border-radius: 5px 5px 0px 0px;
  padding: 0.7em;
  background-color: ${({ currentTheme, messageType }) => ToastTheme[currentTheme][messageType].backgroundColor};

  & > svg {
    fill: ${({ currentTheme, messageType }) => ToastTheme[currentTheme][messageType].color};
    margin-right: 0.5em;
  }
`;

export const Message = styled.p<Type>`
  width: 300px;
  max-height: 60px;
  margin: 0;
  word-break: break-all;
  color: ${({ currentTheme, messageType }) => ToastTheme[currentTheme][messageType].color};
  overflow: hidden;
`;

export const CloseButton = styled.button<Type>`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  & > svg {
    fill: ${({ currentTheme, messageType }) => ToastTheme[currentTheme][messageType].color};
  }
`;
