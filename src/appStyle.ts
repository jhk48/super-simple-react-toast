import styled from 'styled-components';

interface ButtonProps {
	backgroundColor: string;
	textColor: string;
}

export const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 2em;
`;

export const BakeToastButtonContainer = styled.div`
	margin: 1em;
`;

export const Button = styled.button<ButtonProps>`
	outline: none;
	border: none;
	border-radius: 4px;
	color: #fff;
	font-size: 16px;
	margin: 1em;
	padding: 0.4em 0.7em;
	cursor: pointer;
	color: ${({textColor}) => textColor};
	background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Label = styled.label`
	color: var(--textColor);
	margin: 1em 0;
`;

export const Input = styled.input`
	font-size: 16px;
	padding: 0.5em;
	margin: 0 0.5em;
`;

export const Select = styled.select`
	font-size: 16px;
	padding: 0.5em;
	margin: 0 0.5em;
`;

export const Notice = styled.p`
	text-align: center;
  font-size: 20px;
  font-weight: 700;
	margin-top: 3em;
	color: var(--textColor);
`;
