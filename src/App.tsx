import { SyntheticEvent, useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import * as Style from './appStyle';
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
	const [duration, setDuration] = useState<number>(3000);
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

	function handleDurationChange(e: SyntheticEvent) {
		const target = e.target as HTMLInputElement;
		setDuration(Number(target.value));
	}

	function toggleTheme() {
		setCurrentTheme(prev => (prev === 'light' ? 'dark' : 'light'));
	}

	function bakeSuccessToast() {
		toast.success(messageText, currentTheme, toastPosition, duration);
		setMessageText('');
	}

	function bakeWarningToast() {
		toast.warning(messageText, currentTheme, toastPosition, duration);
		setMessageText('');
	}

	function bakeErrorToast() {
		toast.error(messageText, currentTheme, toastPosition, duration);
		setMessageText('');
	}

	function bakeInfoToast() {
		toast.info(messageText, currentTheme, toastPosition, duration);
		setMessageText('');
	}

	return (
		<ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyle />
			<Style.AppContainer>
				<Style.BakeToastButtonContainer>
					<Style.Button
						type="button"
						backgroundColor={currentTheme === 'light' ? '#4CAF50' : '#16B542'}
						onClick={bakeSuccessToast}
					>
						success message
					</Style.Button>
					<Style.Button
						type="button"
						backgroundColor={currentTheme === 'light' ? '#FABE0C' : '#EBB410'}
						onClick={bakeWarningToast}
					>
						warning message
					</Style.Button>
					<Style.Button
						type="button"
						backgroundColor={currentTheme === 'light' ? '#2196F3' : '#1D86E8'}
						onClick={bakeInfoToast}
					>
						info message
					</Style.Button>
					<Style.Button
						type="button"
						backgroundColor={currentTheme === 'light' ? '#FF5252' : '#E74949'}
						onClick={bakeErrorToast}
					>
						error message
					</Style.Button>
				</Style.BakeToastButtonContainer>
				<Style.Label>
					Message Content:
					<Style.Input
						type="text"
						value={messageText}
						onChange={handleTextChange}
						placeholder="메시지 내용"
					/>
				</Style.Label>
				<Style.Label>
					Toast Position:
					<Style.Select onChange={handleSelectChange} value={toastPosition}>
						<option value="topLeft">top-left</option>
						<option value="topCenter">top-center</option>
						<option value="topRight">top-right</option>
						<option value="bottomLeft">bottom-left</option>
						<option value="bottomCenter">bottom-center</option>
						<option value="bottomRight">bottom-right</option>
					</Style.Select>
				</Style.Label>
				<Style.Label>
					Message Duration:
					<Style.Input
						type="number"
						value={duration}
						onChange={handleDurationChange}
						placeholder="메시지 내용"
					/>
					ms
				</Style.Label>
				<Style.Button type="button" backgroundColor="#A637E1" onClick={toggleTheme}>
					toggle theme
				</Style.Button>
			</Style.AppContainer>
			<Style.Notice>⚠️ Responsive UI is not supported yet.</Style.Notice>
		</ThemeProvider>
	);
}

export default App;
