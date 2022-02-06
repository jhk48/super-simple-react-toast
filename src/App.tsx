import { SyntheticEvent, useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import toast from './Toast';
import { ToastPosition } from './types';

const lightTheme: DefaultTheme = {
	bgColor: '#F8F9FA',
	currentTheme: 'light'
};

const darkTheme: DefaultTheme = {
	bgColor: '#1A1C34',
	currentTheme: 'dark'
};

function App() {
	const [messageText, setMessageText] = useState('');
	const [toastPosition, setToastPosition] = useState<ToastPosition>('topLeft');
	const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

	function handleTextChange(e: SyntheticEvent) {
		const target = e.target as HTMLInputElement;
		setMessageText(target.value);
	}

	function handleSelectChange(e: SyntheticEvent) {
		const target = e.target as HTMLSelectElement;
		setToastPosition(target.value as ToastPosition);
	}

	function toggleTheme() {
		setCurrentTheme(prev => (prev === 'light' ? 'dark' : 'light'));
	}

	return (
		<ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyle />
			<button
				type="button"
				onClick={() => toast.success(messageText, currentTheme, toastPosition, 5000)}
			>
				success message
			</button>
			<button
				type="button"
				onClick={() => toast.warning(messageText, currentTheme, toastPosition, 5000)}
			>
				warning message
			</button>
			<button
				type="button"
				onClick={() => toast.info(messageText, currentTheme, toastPosition, 5000)}
			>
				info message
			</button>
			<button
				type="button"
				onClick={() => toast.error(messageText, currentTheme, toastPosition, 5000)}
			>
				error message
			</button>
			<br />
			<br />
			<input
				type="text"
				value={messageText}
				onChange={handleTextChange}
				placeholder="메시지 내용"
			/>
			<br />
			<br />
			<select onChange={handleSelectChange} value={toastPosition}>
				<option value="topLeft">top-left</option>
				<option value="topCenter">top-center</option>
				<option value="topRight">top-right</option>
				<option value="bottomLeft">bottom-left</option>
				<option value="bottomCenter">bottom-center</option>
				<option value="bottomRight">bottom-right</option>
			</select>
			<button type="button" onClick={toggleTheme}>
				toggle theme
			</button>
		</ThemeProvider>
	);
}

export default App;
