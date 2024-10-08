import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
`;

export const StyledSpinner = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 4px solid rgba(0, 0, 0, 0.1);
	animation: ${spin} 1s linear infinite;

	border-left-color: ${({ theme }) => theme.colors.browns[2]};
`;
