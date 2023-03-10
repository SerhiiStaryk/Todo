import styled from 'styled-components';
import { Button } from '../styledSystem';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/actions/action';

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.2);
`;

const Modal = styled.div`
	background-color: #fff;
	border-radius: 8px;
	padding: 24px;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	mask-type: 16px;
`;

const ConfirmationModal = ({ message }) => {
	const dispatch = useDispatch();
	const item = useSelector((state) => state.item);

	const handleConfirm = () => {
		dispatch(actions.deleteTodo(item));
		dispatch(actions.hideModal());
	};

	const handleCancel = () => {
		dispatch(actions.hideModal());
		dispatch(actions.setItem({}));
	};

	return (
		<Overlay>
			<Modal>
				<p>{message}</p>
				<ButtonWrapper>
					<Button onClick={handleConfirm}>Confirm</Button>
					<Button onClick={handleCancel}>Cancel</Button>
				</ButtonWrapper>
			</Modal>
		</Overlay>
	);
};

export default ConfirmationModal;
