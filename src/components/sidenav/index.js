import React from 'react';
import { Formik, Form } from 'formik';

import Input from '../input';
import Checkbox from '../checkbox';
import { useSidenav } from '../../hooks/useSidenav';
import titleSchema from '../../schemas/title-schema';
import {
	Text,
	Flex,
	Button,
	Content,
	FilterMedia,
	AbsoluteBox,
} from '../../ui';


const Sidenav = () => {
	const { title, filters, edit, handleCheckbox, onSubmit } = useSidenav();

	return (
		<Content pt={70} px={15}>
			<AbsoluteBox
				py={15}
				top={-10}
				right={-10}
				width='85%'
				borderRadius={10}
			>
				<Text textAlign='center' color='whites.7' fontSize={[0, 1, 2, 3]}>
					TODO
				</Text>
			</AbsoluteBox>
			<Formik
				onSubmit={onSubmit}
				enableReinitialize={true}
				validationSchema={titleSchema}
				initialValues={{ todoTitle: `${title}` }}
			>
				{props => (
					<Form>
						<Input
							type='text'
							name='todoTitle'
							label='New Todo'
							placeholder='Type todo title...'
						/>
						<Button
							type='submit'
							disabled={props.isValid && props.isValidating}
						>
							{edit ? 'Save' : 'Add new todo'}
						</Button>
					</Form>
				)}
			</Formik>
			<Flex flexDirection='column'>
				<Text color='whites.7' mb={10}>
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
		</Content >
	);
};

export default Sidenav;
