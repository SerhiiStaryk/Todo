import styled, { css } from 'styled-components';
import { Edit, Delete } from '@styled-icons/fluentui-system-regular';
import {
	color,
	width,
	height,
	space,
	border,
	margin,
	overflow,
	boxShadow,
	typography,
	background,
	alignItems,
	borderRadius,
	flexDirection,
	justifyContent,
	gridTemplateColumns,
} from 'styled-system';

const Root = styled.div`
	width: 100vw;
	height: 100vh;
	padding-top: 3%;
	background: rgb(127, 110, 96);
	background: linear-gradient(
		0deg,
		rgba(127, 110, 96, 1) 35%,
		rgba(178, 146, 115, 1) 100%
	);
`;

const Box = styled.div`
	${width}
  ${space}
	${height}
  ${border}
  ${overflow}
  ${boxShadow}
  ${background}
  ${borderRadius}
`;

const GridColumns = styled.div`
	${gridTemplateColumns};

  display: grid;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const Text = styled.p`
	${color}
	${margin}
	${typography};

	${(props) => {
		return css`
			{
				${!props.complete} text-decoration: line-through
			}
		`;
	}}
`;

const Flex = styled(Box)`
	${alignItems}
  ${flexDirection}
	${justifyContent}

  display: flex;
`;

const Button = styled.button`
	color: #fff;
	width: 100%;
	margin: 1em 0;
	font-size: 1em;
	display: block;
	cursor: pointer;
	padding: 0.5em 1em;
	border-radius: 5px;
	background: #af6544;
	display: inline-block;
	border: 2px solid #fff;
	transition: all linear 0.5s;

	:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
	:hover {
		opacity: 0.7;
	}
`;

const EditBtn = styled(Edit)`
	width: 18px;
	margin: 3px;
	cursor: pointer;
	color: rgba(178, 146, 115, 1);
`;

const DeleteBtn = styled(Delete)`
	width: 18px;
	margin: 3px;
	cursor: pointer;
	color: rgba(178, 146, 115, 1);
`;

const Content = styled.div`
	height: 90vh;
	position: relative;
	padding: 70px 15px 0;
	background: rgb(22, 31, 37);
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
	background: linear-gradient(
		20deg,
		rgba(22, 31, 37, 1) 0%,
		rgba(89, 76, 67, 1) 100%
	);

	@media (max-width: 768px) {
		height: 40vh;
		border-radius: 15px 15px 0 0;
	}
`;

const Logo = styled.div`
	top: -10px;
	width: 85%;
	right: -10px;
	padding: 15px 0;
	margin-left: auto;
	position: absolute;
	border-radius: 9px;
	background: #af6544;
`;

const FilterMedia = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		gap: 1em;
		flex-direction: row;
	}
`;

const MainContainer = styled.div`
	width: 75%;
	border-radius: 15px;
	box-shadow: -28px 38px 48px 9px rgba(0, 0, 0, 0.7);

	@media (max-width: 768px) {
		width: 95%;
	}
`;

export {
	Box,
	Text,
	Logo,
	Flex,
	Root,
	Button,
	Content,
	EditBtn,
	DeleteBtn,
	GridColumns,
	FilterMedia,
	MainContainer,
}