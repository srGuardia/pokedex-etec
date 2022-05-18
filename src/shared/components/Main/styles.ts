import styled from 'styled-components';
import colorsGlobal from '../../global/styles/colorsGlobal';

export const MainWrapper = styled.main`
	/* grid-area: MAIN; */
	width: 100%;
	height: 100%;
	background-color: ${colorsGlobal.white};
	overflow-x: hidden;
	overflow-y: scroll;
	padding: 1rem 0;
`;
