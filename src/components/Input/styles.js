import styled from 'styled-components';

export const InputText = styled.input.attrs({ type: 'text' })`
	padding: 1em;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
`;

export const Label = styled.label`
	display: inline-block;
	margin-bottom: 12px;
	color: #fff;
`;

export const Error = styled.span`
	color: rgb(175, 101, 68);
	font-size: 12px;
`;
