import * as yup from 'yup';

const titleSchema = yup.object().shape({
	todoTitle: yup
		.string()
		.min(4, 'Todo title is too short - should be 4 chars min')
		.max(50, 'Todo title is too long - should be 50 chars max')
		.required('Required'),
});

export default titleSchema;
