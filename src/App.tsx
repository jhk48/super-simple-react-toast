import { SyntheticEvent, useEffect, useState } from 'react';
import GlobalStyle from './GlobalStyle';
import * as Style from './appStyle';
import { useToast, ToastPosition } from 'super-simple-react-toast';

function App() {
	const toast = useToast();
	const [messageText, setMessageText] = useState('');
	const [duration, setDuration] = useState(3000);
	const [maxNumOfMessages, setMaxNumOfMessages] = useState(5);
	const [toastPosition, setToastPosition] = useState<ToastPosition>('topLeft');
	const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

	useEffect(() => {
		document.documentElement.dataset.theme = currentTheme;
	}, [currentTheme]);

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

	function handleMaxNumMessagesChange(e: SyntheticEvent) {
		const target = e.target as HTMLInputElement;
		setMaxNumOfMessages(Number(target.value));
	}

	function toggleTheme() {
		setCurrentTheme(prev => (prev === 'light' ? 'dark' : 'light'));
	}

	function bakeSuccessToast() {
		toast.success({
			message: messageText,
			position: toastPosition,
			duration,
			maxNumOfMessages
		});
		setMessageText('');
	}

	function bakeWarningToast() {
		toast.warning({
			message: messageText,
			position: toastPosition,
			duration,
			maxNumOfMessages
		});
		setMessageText('');
	}

	function bakeErrorToast() {
		toast.error({
			message: messageText,
			position: toastPosition,
			duration,
			maxNumOfMessages
		});
		setMessageText('');
	}

	function bakeInfoToast() {
		toast.info({
			message: messageText,
			position: toastPosition,
			duration,
			maxNumOfMessages
		});
		setMessageText('');
	}

	return (
		<>
			<GlobalStyle />
			<Style.AppContainer>
				<Style.BakeToastButtonContainer>
					<Style.Button
						type="button"
						textColor="var(--white)"
						backgroundColor="var(--toastSuccessBgColor)"
						onClick={bakeSuccessToast}
					>
						success message
					</Style.Button>
					<Style.Button
						type="button"
						textColor="var(--toastWarningTextColor)"
						backgroundColor="var(--toastWarningBgColor)"
						onClick={bakeWarningToast}
					>
						warning message
					</Style.Button>
					<Style.Button
						type="button"
						textColor="var(--white)"
						backgroundColor="var(--toastInfoBgColor)"
						onClick={bakeInfoToast}
					>
						info message
					</Style.Button>
					<Style.Button
						type="button"
						textColor="var(--white)"
						backgroundColor="var(--toastErrorBgColor)"
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
						placeholder="Type message here..."
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
						placeholder="duration"
					/>
					ms
				</Style.Label>
				<Style.Label>
					Max number of messages per position:
					<Style.Input
						type="number"
						value={maxNumOfMessages}
						onChange={handleMaxNumMessagesChange}
						placeholder="max num of messages"
					/>
				</Style.Label>
				<Style.Button
					type="button"
					textColor="var(--white)"
					backgroundColor="#A637E1"
					onClick={toggleTheme}
				>
					toggle theme
				</Style.Button>
			</Style.AppContainer>
			<Style.Notice>⚠️ Responsive UI is not supported yet.</Style.Notice>
		</>
	);
}

export default App;
