import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
	* {
		box-sizing: border-box;
	}
	
	html,
	body {
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		font-style: normal;
		overflow-x: hidden;
		margin: 0;
		padding: 0;
		scroll-behavior: smooth;
		background-color: rgb(61, 57, 56);
	}
`