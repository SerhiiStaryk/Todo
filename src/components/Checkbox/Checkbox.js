
import { Flex } from '../../styledSystem';
import { Input, LabelText } from './styles';

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
