import * as R from 'ramda';
import styled, { css } from 'styled-components';
import { Edit, Delete } from '@styled-icons/fluentui-system-regular';
import {
	top,
	right,
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

const GridColumns = styled(Box)`
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

	${({ complete }) => css`
			{${R.not(complete)} text-decoration: line-through}
		`
	}
`;

const Flex = styled(Box)`
	${alignItems}
  ${flexDirection}
	${justifyContent}

  display: flex;
`;

const Button = styled.button`
  ${width}
  ${space}

	margin: 1em 0;
	cursor: pointer;
	border: 2px solid;
	padding: 0.5em 1em;
	border-radius: 5px;
	transition: all linear 0.5s;

	font-size: ${({ theme }) => theme.fontSizes[0]};
	background:  ${({ theme }) => theme.colors.browns[2]};
	color: ${({ theme }) => theme.colors.whites[8]};

	:disabled,
  :hover {
		opacity: 0.7
	}

	:disabled {
	cursor: not-allowed;
	}
`;

Button.defaultProps = {
	width: '100%',
}

const EditBtn = styled(Edit)`
	width: 18px;
	margin: 3px;
	cursor: pointer;

	color: ${({ theme }) => theme.colors.browns[2]};
`;

const DeleteBtn = styled(Delete)`
	width: 18px;
	margin: 3px;
	cursor: pointer;

	color: ${({ theme }) => theme.colors.browns[2]};
`;

const RelativeBox = styled(Box)`
  position: relative;
`;

const Content = styled(RelativeBox)`
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

const AbsoluteBox = styled(Box)`
  ${top}
  ${right}

	position: absolute;

  background: ${({ theme }) => theme.colors.browns[2]};
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

const Root = styled(Box)`
	background: rgb(127, 110, 96);
	background: linear-gradient(
		0deg,
		rgba(127, 110, 96, 1) 35%,
		rgba(178, 146, 115, 1) 100%,
	);
`;

export {
	Box,
	Text,
	Flex,
	Root,
	Button,
	Content,
	EditBtn,
	DeleteBtn,
	GridColumns,
	FilterMedia,
	AbsoluteBox,
	MainContainer,
}