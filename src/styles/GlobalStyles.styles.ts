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
		margin: 0;
		padding: 0;
	}
`