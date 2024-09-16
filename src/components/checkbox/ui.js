import styled from 'styled-components';

const Input = styled.input.attrs({ type: 'checkbox' })`
	width: 20px;
	height: 20px;
	cursor: pointer;
	margin-right: 8px;
`;

const LabelText = styled.label`
	color: #fff;
`;

export {
	Input,
	LabelText,
}