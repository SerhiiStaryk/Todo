import styled from 'styled-components';

export const Overlay = styled.div`
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

export const Modal = styled.div`
	background-color: #fff;
	border-radius: 8px;
	padding: 24px;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	mask-type: 16px;
`;
