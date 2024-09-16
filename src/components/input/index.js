import { useField } from 'formik';
import { Error, InputText, Label } from './ui';

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