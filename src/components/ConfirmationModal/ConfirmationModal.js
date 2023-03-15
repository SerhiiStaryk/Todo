import { Button } from '../../styledSystem';
import { ButtonWrapper, Modal, Overlay } from './styles';
import { useConfirmationModal } from './useConfirmationModal';

const ConfirmationModal = ({ message }) => {
	const { handleConfirm, handleCancel } = useConfirmationModal();

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
