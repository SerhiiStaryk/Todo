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
	padding-top: 5%;
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

export const Text = styled.div`
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
