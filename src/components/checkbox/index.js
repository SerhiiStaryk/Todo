
import { Flex } from '../../ui';
import { Input, LabelText } from './ui';

const Checkbox = ({ checked, handleCheckboxChange, name, text }) => (
	<Flex alignItems={'center'}>
		<Input
			name={name}
			checked={checked}
			onChange={handleCheckboxChange}
		/>
		{text && <LabelText>{text}</LabelText>}
	</Flex>
);

export default Checkbox;
