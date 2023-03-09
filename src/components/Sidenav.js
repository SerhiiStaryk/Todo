import React from 'react';
import {
	Button,
	Text,
	Flex,
	Content,
	Logo,
	FilterMedia,
} from '../styledSystem';
import Checkbox from './Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/actions/action';
import { Formik, Form } from 'formik';
import titleSchema from '../schemas/titleSchema';
import Input from './Input';

const Sidenav = () => {
	const dispatch = useDispatch();

	const filters = useSelector((state) => state.filters);
	const title = useSelector((state) => state.title);
	const edit = useSelector((state) => state.edit);

	const handleCheckbox = (name) => {
		const newFilter = { ...filters };
		if (name === 'inProgress') {
			newFilter.inProgress = !filters.inProgress;
		}

		if (name === 'completed') {
			newFilter.completed = !filters.completed;
		}

		dispatch(actions.setFilters(newFilter));
	};

	const onSubmit = (value, action) => {
		console.log(value);
		if (edit) {
			dispatch(actions.editTodo(value.todoTitle));
			return;
		}
		dispatch(actions.addTodo(value.todoTitle));
		action.resetForm();
	};

	return (
		<Content>
			<Logo>
				<Text textAlign='center' color={'whites.7'} fontSize={[0, 1, 2, 3]}>
					TODO
				</Text>
			</Logo>

			<Formik
				initialValues={{ todoTitle: `${title}` }}
				validationSchema={titleSchema}
				onSubmit={onSubmit}
				enableReinitialize={true}
			>
				{(props) => {
					return (
						<Form>
							<Input
								label='New Todo'
								name='todoTitle'
								type='text'
								placeholder='Type todo title...'
							></Input>
							<Button disabled={props.isValid && props.isValidating} type='submit'>
								{edit ? 'Save' : 'Add new todo'}
							</Button>
						</Form>
					);
				}}
			</Formik>

			<Flex flexDirection={'column'}>
				<Text color={'whites.7'} margin={'0 0 10px'}>
					Filter:
				</Text>
				<FilterMedia>
					<Checkbox
						id='completed'
						text='Completed'
						checked={filters.completed}
						handleCheckboxChange={() => handleCheckbox('completed')}
					/>
					<Checkbox
						id='inProgress'
						text='In Progress'
						checked={filters.setInProgress}
						handleCheckboxChange={() => handleCheckbox('inProgress')}
					/>
				</FilterMedia>
			</Flex>
		</Content>
	);
};

export default Sidenav;
