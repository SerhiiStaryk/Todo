import styled, { css } from 'styled-components';
import {
	color,
	width,
	gridTemplateColumns,
	typography,
	height,
	borderRadius,
	background,
	border,
	justifyContent,
	alignItems,
	padding,
	margin,
	overflow,
	boxShadow,
	flexDirection,
} from 'styled-system';
import { Edit, Delete } from '@styled-icons/fluentui-system-regular';

export const Root = styled.div`
	background: rgb(127, 110, 96);
	background: linear-gradient(
		0deg,
		rgba(127, 110, 96, 1) 35%,
		rgba(178, 146, 115, 1) 100%
	);
	padding-top: 3%;
	width: 100vw;
	height: 100vh;
`;

export const Box = styled.div`
	${height}
	${width}
  ${border}
  ${borderRadius}
  ${background}
  ${padding}
  ${margin}
  ${overflow}
  ${boxShadow}
`;

export const GridColumns = styled.div`
	display: grid;
	${gridTemplateColumns};

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const Text = styled.p`
	${typography};
	${color}
	${margin}
	${(props) => {
		return css`
			{
				${!props.complete} text-decoration: line-through
			}
		`;
	}}
`;

export const Flex = styled.div`
	display: flex;
	${justifyContent}
	${alignItems}
  ${flexDirection}
`;

export const Button = styled.button`
	display: inline-block;
	color: #fff;
	font-size: 1em;
	margin: 1em 0;
	padding: 0.5em 1em;
	border: 2px solid #fff;
	border-radius: 5px;
	display: block;
	background: #af6544;
	cursor: pointer;
	transition: all linear 0.5s;
	width: 100%;
	:disabled {
		cursor: not-allowed;
		opacity: 0.7;
	}
	:hover {
		opacity: 0.7;
	}
`;

export const EditBtn = styled(Edit)`
	width: 18px;
	color: rgba(178, 146, 115, 1);
	margin: 3px;
	cursor: pointer;
`;

export const DeleteBtn = styled(Delete)`
	width: 18px;
	color: rgba(178, 146, 115, 1);
	margin: 3px;
	cursor: pointer;
`;

export const Content = styled.div`
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
	background: rgb(22, 31, 37);
	background: linear-gradient(
		20deg,
		rgba(22, 31, 37, 1) 0%,
		rgba(89, 76, 67, 1) 100%
	);
	position: relative;
	height: 90vh;
	padding: 70px 15px 0;

	@media (max-width: 768px) {
		height: 40vh;
		border-radius: 15px 15px 0 0;
	}
`;

export const Logo = styled.div`
	position: absolute;
	border-radius: 9px;
	top: -10px;
	right: -10px;
	margin-left: auto;
	background: #af6544;
	width: 85%;
	padding: 15px 0;
`;

export const FilterMedia = styled.div`
	display: flex;
	flex-direction: column;
	@media (max-width: 768px) {
		flex-direction: row;
		gap: 1em;
	}
`;

export const MainContainer = styled.div`
	width: 75%;
	box-shadow: -28px 38px 48px 9px rgba(0, 0, 0, 0.7);
	border-radius: 15px;

	@media (max-width: 768px) {
		width: 95%;
	}
`;
