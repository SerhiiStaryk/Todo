import { ModalWindow, Overlay } from './ui';

const Modal = ({ children, closeHandler }) => {
	return (
		<>
			<Overlay onClick={closeHandler} />
			<ModalWindow>{children}</ModalWindow>
		</>
	);
};

export default Modal;
