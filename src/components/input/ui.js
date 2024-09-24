import styled from 'styled-components';

const InputText = styled.input.attrs({ type: 'text' })`
	width: 100%;
	padding: 1em;
	border: none;
	border-radius: 3px;
`;

const Label = styled.label`
  margin-left: 5px;
	margin-bottom: 3px;
	display: inline-block;

	color: ${({ theme }) => theme.colors.whites[8]};
`;

const Error = styled.span`
  margin-left: 5px;
	font-size: 12px;

	color: ${({ theme }) => theme.colors.browns[2]};
`;

export { InputText, Label, Error }
