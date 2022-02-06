import styled from 'styled-components';

interface ButtonProps {
  backgroundColor: string;
}

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em;
`;

export const BakeToastButtonContainer = styled.div`
  margin: 2em;
`;

export const Button = styled.button<ButtonProps>`
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  margin: 0 1em;
  padding: 0.4em 0.7em;
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 0.5em;
  margin: 1em 0.5em 1em;
`;

export const Select = styled.select`
  font-size: 16px;
  padding: 0.5em;
  margin: 1em 0.5em 3em;
`
