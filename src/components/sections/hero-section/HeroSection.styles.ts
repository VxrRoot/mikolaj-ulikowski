import styled from 'styled-components';

export const OuterWrapper = styled.section`
	padding-top: 64px;
	position: relative;
	background: rgb(53,45,42);
	background: linear-gradient(0deg, rgba(53,45,42,1) 10%, rgba(122,117,117,1) 100%);
	/* background-color: #0A2328; */
	/* padding-bottom: 100px; */
	
	@media(min-width: 1024px) {
		padding-bottom: 35px;
	}
	
	//@media(min-width: 1400px) {
	//	padding-bottom: 0px;
	//}
`;

export const Wrapper = styled.div`
	padding: 8px;
	position: relative;
	display: flex;
	flex-direction: column;
	
	@media(min-width: 800px) {
		flex-direction: row;
	}
`;

export const StyledContentWrapper = styled.div`
	opacity: 0;
	margin-top: 40px;
	z-index: 9;
	
	h1 {
		/* opacity: 0; */
		margin: 16px 0;
		color: ${({theme}) => theme.colorWhite};
		font-size: 24px;
		line-height: 30px;
		font-weight: 700;
		font-family: ${({theme}) => theme.fontFamilyRoboto};
	}
	
	.space {
		display: block;
		height: 4px;
		width: 60px;
		background-color: ${({theme}) => theme.colorPeach};
	}
	
	.subtitle {
		/* opacity: 0; */
		font-size: 16px;
		line-height: 22px;
		margin: 16px 0;
		color: ${({theme}) => theme.colorWhite};
		text-align: left;
		font-family: ${({theme}) => theme.fontFamilyRoboto};
		font-weight: 400;
	}

	@media(min-width: 350px) {
		h1 {
			font-size: 24px;
			font-family: ${({theme}) => theme.fontFamilyRoboto};
			font-weight: 700;
			line-height: 36px;
		}
	}

	@media(min-width: 380px) {
		h1 {
			font-size: 28px;
		}
	}

	@media(min-width: 700px) {
		margin-top: 50px;
		h1 {
			font-size: 42px;
			line-height: 50px;
		}
	}

	@media(min-width: 1060px) {
		margin-top: 100px;

		h1 {
			font-size: 46px;
			line-height: 56px;
			padding-right: 0;
			margin-right: 0;
		}

		.subtitle {
			font-size: 18px;
			line-height: 30px;
			max-width: 90%;
		}
	}

	@media(min-width: 1170px) {
		margin-top: 100px;
		
		h1 {
			font-size: 54px;
			line-height: 64px;
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
	margin: 0 auto;
	opacity: 0;

	@media(min-width: 700px) {
		margin-left: auto;
		margin-top: -50px;
	}

	@media(min-width: 1024px) {
		margin: -100px 0 0 auto;
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
	bottom: -6px;
	left: 0;
	
	svg {
		width: 100%;
		fill: white;
	}
`;

export const StyledButtonWr = styled.div`
	display: flex;
	justify-content: center;
	margin: 30px 0;
	
	@media(min-width: 800px) {
		justify-content: flex-start;
	}
`;

export const StyledButton = styled.button`
	/* opacity: 0; */
	color: ${({theme}) => theme.colorBlack};
	background-color: ${({theme}) => theme.colorPeach};
	height: 40px;
	border: none;
	padding: 5px 15px;
	border-radius: 50px;
	margin: 0;
	font-weight: 600;
	font-size: 12px;
	cursor: pointer;
	transition: .2s;
	font-family: ${({theme}) => theme.fontFamilyRoboto};
	
	&:hover {
		background-color: ${({theme}) => theme.darkPeach};
		color: white;
		//-webkit-box-shadow: inset 0px 0px 0px 1px white;
		//-moz-box-shadow: inset 0px 0px 0px 1px white;
		//box-shadow: inset 0px 0px 0 1px white;
	}
	
	@media(min-width: 350px) {
		font-size: 16px;
		height: 52px;
	}
`;