import styled from 'styled-components';

const Overlay = styled.div`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	position: absolute;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.2);
`;

const ModalWindow = styled.div`
	top: 50%;
	left: 50%;
	padding: 24px;
	position: absolute;
	border-radius: 8px;
	background-color: #fff;
	transform: translate(-50%, -50%);
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

export { Overlay, ModalWindow };