import styled from 'styled-components';

export const StyledSection = styled.section`
	position: relative;
	background-color: ${({theme}) => theme.colorWhite};
	padding: 50px 0;
`;

export const CalendlyWrapper = styled.div`
	margin: 100px 0;
	
	.calendly {
		z-index: 100 !important;
	}
	
	@media(min-width: 1024px) {
		margin: 20px 0;
	}
`;

export const StyledCircle1 = styled.div`
	z-index: 0;
	position: absolute;
	width: 150px;
	height: 150px;
	top: 0;
	right: -100px;
	
	@media(min-width: 650px) {
		top: 10%;
	}

	@media(min-width: 1200px) {
		width: 200px;
		height: 200px;
		top: 25%;
	}
	
	@media(min-width: 1200px) {
		width: 300px;
		height: 300px;
	}
`;

export const StyledCircle2 = styled.div`
	display: none;
	z-index: 0;
	position: absolute;
	width: 100px;
	height: 100px;
	top: 10%;
	left: 10%;
	
	@media(min-width: 750px) {
		display: block;
	}
`;