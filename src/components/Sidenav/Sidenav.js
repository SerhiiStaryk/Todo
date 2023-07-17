import React from 'react';
import { Formik, Form } from 'formik';

import {
	Button,
	Text,
	Flex,
	Content,
	Logo,
	FilterMedia,
} from '../../styledSystem';
import titleSchema from '../../schemas/titleSchema';

import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import { useSidenav } from './useSidenav';

const Sidenav = () => {
	const { title, filters, edit, handleCheckbox, onSubmit } = useSidenav();

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
							<Button
								disabled={props.isValid && props.isValidating}
								type='submit'
							>
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
