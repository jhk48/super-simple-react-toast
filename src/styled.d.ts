import 'styled-components';
import { Theme, ThemeColors } from '@types';

declare module 'styled-components' {
	export interface DefaultTheme {
		bgColor: string;
	}
}
