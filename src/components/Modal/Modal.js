import styled from 'styled-components';

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

const ModalWindow = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #fff;
	border-radius: 8px;
	padding: 24px;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

const Modal = ({ children, closeHandler }) => {
	return (
		<>
			<Overlay onClick={closeHandler} />
			<ModalWindow>{children}</ModalWindow>
		</>
	);
};

export default Modal;
