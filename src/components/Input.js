import { useField } from 'formik';
import styled from 'styled-components';

const InputText = styled.input.attrs({ type: 'text' })`
	padding: 1em;
	background: papayawhip;
	border: none;
	border-radius: 3px;
  width: 100%;
`;

const Label = styled.label`
	display: inline-block;
	margin-bottom: 12px;
	color: #fff;
`;

const Error = styled.span`
	color: rgb(175, 101, 68);
	font-size: 12px;
`;

const Input = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<Label>{label}</Label>
			<InputText {...field} {...props} />
			{meta.touched && meta.error && <Error>{meta.error}</Error>}
		</>
	);
};

export default Input;
