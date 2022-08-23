import styled from 'styled-components';

export const OuterWrapper = styled.section`
	padding-top: 64px;
	position: relative;
	//background: rgb(53,45,42);
	//background: linear-gradient(0deg, rgba(53,45,42,1) 0%, rgba(131,125,125,1) 54%);
	background-color: black;
	padding-bottom: 10px;
	
	@media(min-width: 1024px) {
		padding-bottom: 50px;
	}
	
	//@media(min-width: 1400px) {
	//	padding-bottom: 0px;
	//}
`;

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	
	@media(min-width: 800px) {
		flex-direction: row;
	}
`;

export const StyledContentWrapper = styled.div`
	margin-top: 40px;
	z-index: 9;
	
	h1 {
		opacity: 0;
		color: ${({theme}) => theme.colorWhite};
		font-size: 22px;
		line-height: 32px;
		font-weight: 700;
		text-align: left;
		max-width: 90%;
		font-family: ${({theme}) => theme.fontFamilyOpenSans};
		margin: 0;
	}
	
	.space {
		display: block;
		height: 4px;
		width: 60px;
		background-color: ${({theme}) => theme.colorPeach};
		margin: 15px 0;
	}
	
	.subtitle {
		opacity: 0;
		display: none;
		font-size: 16px;
		line-height: 22px;
		color: ${({theme}) => theme.colorWhite};
		text-align: left;
		max-width: 90%;
		font-family: ${({theme}) => theme.fontFamilyOpenSans};
		font-weight: 400;
	}

	@media(min-width: 350px) {
		h1 {
			font-size: 28px;
			line-height: 38px;
		}
	}

	@media(min-width: 700px) {
		h1 {
			font-size: 35px;
			line-height: 45px;
		}
		.subtitle {
			display: block;
		}
	}

	@media(min-width: 950px) {
		margin-top: 100px;

		h1 {
			font-size: 40px;
			line-height: 50px;
			padding-right: 0;
		}

		.subtitle {
			font-size: 18px;
			line-height: 30px;
		}
	}

	@media(min-width: 1130px) {
		margin-top: 100px;
		
		h1 {
			font-size: 48px;
			line-height: 60px;
		}

		.subtitle {
			font-size: 20px;
			line-height: 35px;
		}
	}
`;

export const StyledImageWrapper = styled.div`
	z-index: 0;
	width: 70%;
	max-width: 300px;
	margin-left: auto;
	margin-top: 30px;

	@media(min-width: 700px) {
		width: 50%;
	}

	@media(min-width: 1024px) {
		margin: -40px 0 0 auto;
		max-width: 400px;
		width: 100%;
	}
`;

export const StyledCircle = styled.div`
	position: absolute;
	width: 160px;
	height: 160px;
	left: -100px;
	bottom: -20px;

	@media(min-width: 1024px) {
		bottom: -20px;
	}

	@media(min-width: 1400px) {
		bottom: -40px;
	}
`

export const StyledBottomSection = styled.div`
	width: 100%;
	position: absolute;
	bottom: -5px;
	left: 0;
	
	svg {
		width: 100%;
		fill: white;
	}
`;

export const StyledButton = styled.button`
	opacity: 0;
	color: ${({theme}) => theme.colorBlack};
	background-color: ${({theme}) => theme.colorPeach};
	height: 40px;
	border: none;
	padding: 5px 15px;
	border-radius: 50px;
	margin-top: 14px;
	font-weight: 600;
	font-size: 12px;
	cursor: pointer;
	transition: .2s;
	
	&:hover {
		background-color: ${({theme}) => theme.darkPeach};
		//-webkit-box-shadow: inset 0px 0px 0px 1px white;
		//-moz-box-shadow: inset 0px 0px 0px 1px white;
		//box-shadow: inset 0px 0px 0 1px white;
	}
	
	@media(min-width: 350px) {
		font-size: 16px;
		height: 52px;
	}
`;