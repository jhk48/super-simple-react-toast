import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		bgColor: string;
		currentTheme: 'light' | 'dark';
	}
}
