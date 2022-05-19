import { createGlobalStyle } from 'styled-components';

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
}

a {
	text-decoration: none;
}

ul {
	list-style: none;
}

`;
