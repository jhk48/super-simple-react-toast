import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastProvider, Toast } from 'super-simple-react-toast';

const toastInstance = new Toast(document.getElementById('toast-root'));

ReactDOM.render(
	<React.StrictMode>
		<ToastProvider toastInstance={toastInstance}>
			<App />
		</ToastProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
