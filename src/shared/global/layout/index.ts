import { createGlobalStyle } from 'styled-components';
import layoutGlobal from '../styles/layoutGlobal';

export const GlobalLayout = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	outline: none;
	box-sizing: border-box;
	font-family: 'Raleway', 'Roboto', sans-serif;
}

html, body, #root {
	width: 100vw;
	height: 100vh;
	background-color: #ffffff;
}

#root {
	display: flex;
	flex-direction: column;
	/* grid-template-areas: '${layoutGlobal.HEADER} ${layoutGlobal.HEADER} ${layoutGlobal.HEADER}'
						 '${layoutGlobal.MAIN} ${layoutGlobal.MAIN} ${layoutGlobal.MAIN}'
						 '${layoutGlobal.FOOTER} ${layoutGlobal.FOOTER} ${layoutGlobal.FOOTER}';
	grid-template-columns: .5fr 2fr;
	grid-template-rows: 25vh 70vh; */
}

a {
	text-decoration: none;
}

ul {
	list-style: none;
}

`;
