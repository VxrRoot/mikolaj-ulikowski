import styled from 'styled-components';

export const OuterWrapper = styled.section`
	padding-top: 64px;
	position: relative;
	background: rgb(53,45,42);
	background: linear-gradient(0deg, rgba(53,45,42,1) 0%, rgba(131,125,125,1) 54%);
	padding-bottom: 10px;
`;

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	
	@media(min-width: 1024px) {
		flex-direction: row;
	}
`;

export const StyledContentWrapper = styled.div`
	margin-top: 40px;
	
	h1 {
		color: ${({theme}) => theme.colorWhite};
		font-size: 28px;
		line-height: 38px;
		font-weight: 700;
		text-align: left;
		max-width: 90%;
		font-family: ${({theme}) => theme.fontFamilyOpenSans};
	}
	
	.space {
		display: block;
		height: 4px;
		width: 60px;
		background-color: ${({theme}) => theme.colorPeach};
	}
	
	p {
		font-size: 16px;
		line-height: 22px;
		color: ${({theme}) => theme.colorWhite};
		text-align: left;
		max-width: 90%;
		font-family: ${({theme}) => theme.fontFamilyOpenSans};
	}

	@media(min-width: 950px) {
		margin-top: 100px;

		h1 {
			font-size: 40px;
			line-height: 50px;
		}

		p {
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

		p {
			font-size: 20px;
			line-height: 35px;
		}
	}
`;

export const StyledImageWrapper = styled.div`
	z-index: 0;
	width: 60%;
	margin-left: auto;

	@media(min-width: 700px) {
		width: 50%;
	}

	@media(min-width: 1024px) {
		margin: -40px 0 0 auto;
		width: 55%;
	}
`;

export const StyledCircle = styled.div`
	position: absolute;
	width: 160px;
	height: 160px;
	left: -100px;
	bottom: -20px;

	@media(min-width: 1024px) {
		bottom: -10px;
	}

	@media(min-width: 1400px) {
		bottom: 10px;
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