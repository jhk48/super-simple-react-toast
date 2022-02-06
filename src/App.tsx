import { SyntheticEvent, useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import toast from './Toast';

const lightTheme: DefaultTheme= {
  bgColor: '#F8F9FA',
  currentTheme: 'light'
}

const darkTheme: DefaultTheme = {
  bgColor: '#1A1C34',
  currentTheme: 'dark'
}

function App() {
  const [messageText, setMessageText] = useState('');
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  
  function handleChange(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    setMessageText(target.value);
  }

  function toggleTheme() {
    setCurrentTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <button type="button" onClick={() => toast.success(messageText, currentTheme, 500)}>success message</button>
      <button type="button" onClick={() => toast.warning(messageText, currentTheme, 500000)}>warning message</button>
      <button type="button" onClick={() => toast.info(messageText, currentTheme)}>info message</button>
      <button type="button" onClick={() => toast.error(messageText, currentTheme)}>error message</button>
      <br />
      <br />
      <input type="text" value={messageText} onChange={handleChange} placeholder="메시지 내용" />
      <br />
      <br />
      <button type="button" onClick={toggleTheme}>toggle theme</button>
    </ThemeProvider>
  );
}

export default App;
