import styled from 'styled-components';

const InputText = styled.input.attrs({ type: 'text' })`
	width: 100%;
	padding: 1em;
	border: none;
	border-radius: 3px;
	background: papayawhip;
`;

const Label = styled.label`
	color: #fff;
	margin-bottom: 12px;
	display: inline-block;
`;

const Error = styled.span`
	font-size: 12px;
	color: rgb(175, 101, 68);
`;

export { InputText, Label, Error }
