import styled from 'styled-components';

export const TodoContainer = styled.section`
	height: 90vh;
	padding-top: 3%;
	background: rgb(23, 31, 38);
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
	background: linear-gradient(
		0deg,
		rgba(23, 31, 38, 1) 0%,
		rgba(89, 76, 67, 1) 70%
	);

	@media (max-width: 768px) {
		height: 55vh;
		border-radius: 0 0 15px 15px;
	}
`;

export const TodoListBox = styled.div`
	width: 90%;
	height: 85vh;
	padding: 15px;
	overflow: auto;
	border-radius: 10px 5px 5px 10px;
	background: linear-gradient(0deg, #a8b0b3 0%, #f9e9d1 73%);

	@media (max-width: 768px) {
		height: 50vh;
		width: 95%;
	}
`;
