import React from 'react';
import styled from 'styled-components';
import { Button, Text, Flex } from '../styledSystem';
import Checkbox from './Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/actions/action';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

const Content = styled.div`
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
	background: rgb(22, 31, 37);
	background: linear-gradient(
		20deg,
		rgba(22, 31, 37, 1) 0%,
		rgba(89, 76, 67, 1) 100%
	);
	position: relative;
	height: 75vh;
	padding: 70px 15px 0;

	@media (max-width: 768px) {
		height: 35vh;
		border-radius: 15px 15px 0 0;
	}
`;

const Logo = styled.div`
	position: absolute;
	border-radius: 9px;
	top: -10px;
	right: -10px;
	margin-left: auto;
	background: #af6544;
	width: 85%;
	padding: 15px 0;
`;

const InputText = styled.input.attrs({ type: 'text' })`
	padding: 1em;
	background: papayawhip;
	border: none;
	border-radius: 3px;
`;

const Label = styled.label`
	display: inline-block;
	margin-bottom: 10px;
	color: #fff;
`;

const Sidenav = () => {
	const dispatch = useDispatch();

	const filters = useSelector((state) => state.filters);
	const title = useSelector((state) => state.title);
	const edit = useSelector((state) => state.edit);

	const handleInputChange = (event) => {
		dispatch(actions.setTitle(event.target.value));
	};

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

	const createTodo = () => {
		if (edit) {
			dispatch(actions.editTodo());
			return;
		}
		dispatch(actions.addTodo());
	};

	// const titleSchema = Yup.object().shape({
	// 	title: Yup.string()
	// 		.min(4, 'Title is too short - should be 4 chars min')
	// 		// .max(50, 'Title is too long - should be 50 chars long'),
	// });

	return (
		<Content>
			<Logo>
				<Text textAlign='center' color={'whites.7'} fontSize={[0, 1, 2, 3]}>
					TODO
				</Text>
			</Logo>
			{/* ------------------------------------------FORMIK-------------------------------------------------------------------------- */}
			{/* <Formik
				initialValues={{
					title:''
				}}
				validationSchema={titleSchema}
				onSubmit={(value) => {
					console.log(value)
					createTodo();
				}}
			>
				{(formik) => {
					const { errors, touched, isValid, dirty } = formik;

					console.log(formik)
					// console.log(errors);
					// console.log(touched);
					// console.log(isValid);
					// console.log(dirty);
					
					return (
						<Form>
							<Flex flexDirection={'column'}>
								<ErrorMessage name='title' component='span' className='error' />
								<Label htmlFor='title'>New Todo</Label>
								<Field
									id='title'
									name='title'
									placeholder='Type...'
									onChange={handleInputChange}
								/>
								<Button disabled={!title.length} type='submit'>
									{edit ? 'Edit' : 'Add'}
								</Button>
							</Flex>
						</Form>
					);
				}}
			</Formik> */}
			{/* ------------------------------------------------------------------------------------ */}
			<Flex flexDirection={'column'}>
				<Label htmlFor='title'>
					<Text>New Todo</Text>
				</Label>
				<InputText
					id='title'
					placeholder={'Type...'}
					value={title}
					onChange={handleInputChange}
				/>
				<Button disabled={!title.length} onClick={() => createTodo()}>
					{edit ? 'Edit' : 'Add'}
				</Button>
			</Flex>

			<Flex flexDirection={'column'}>
				<Text color={'#fff'} margin={'0 0 10px'}>
					Filter
				</Text>
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
			</Flex>
		</Content>
	);
};

export default Sidenav;
