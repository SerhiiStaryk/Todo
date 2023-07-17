import styled from 'styled-components';

export const TodoContainer = styled.section`
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
	background: rgb(23, 31, 38);
	background: linear-gradient(
		0deg,
		rgba(23, 31, 38, 1) 0%,
		rgba(89, 76, 67, 1) 70%
	);
	height: 90vh;
	padding-top: 3%;

	@media (max-width: 768px) {
		height: 55vh;
		border-radius: 0 0 15px 15px;
	}
`;

export const TodoListBox = styled.div`
	padding: 15px;
	height: 85vh;
	width: 90%;
	background: linear-gradient(0deg, #a8b0b3 0%, #f9e9d1 73%);
	border-radius: 10px 5px 5px 10px;
	overflow: auto;

	@media (max-width: 768px) {
		height: 50vh;
		width: 95%;
	}
`;
