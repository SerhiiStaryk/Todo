import React from 'react';
import styled from 'styled-components';
import { Flex } from '../styledSystem';

const Input = styled.input.attrs({ type: 'checkbox' })`
	margin-right: 8px;
	width: 20px;
	height: 20px;
	cursor: pointer;
`;

const LabelText = styled.label`
	color: #fff;
`;

const Checkbox = ({ checked, handleCheckboxChange, name, text }) => {
	return (
		<Flex alignItems={'center'}>
			<Input
				checked={checked}
				onChange={handleCheckboxChange}
				name={name}
			/>
			{text && <LabelText>{text}</LabelText>}
		</Flex>
	);
};

export default Checkbox;
