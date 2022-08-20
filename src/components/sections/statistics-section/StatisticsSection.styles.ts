import styled from 'styled-components';

export const Container = styled.section`
	padding-top: 50px;
	position: relative;
	background-color: white;
	padding-bottom: 50px;
	
	.circle_wr_1 {
		position: absolute;
		bottom: 20%;
		left: 8%;
		width: 150px;
		height: 150px;
	}

	.circle_wr_2 {
		position: absolute;
		bottom: 25%;
		right: 15%;
		width: 50px;
		height: 50px;
	}
	
	.circle_wr_3 {
		position: absolute;
		right: -20px;
		top: 20%;
		width: 100px;
		height: 100px;
	}
	
	@media(min-width: 1200px) {
		.circle_wr_1 {
			bottom: 30%;
			left: 3%;
			width: 400px;
			height: 400px;
		}

		.circle_wr_2 {
			z-index: 100;
			bottom: 10%;
			left: 20%;
			width: 50px;
			height: 50px;
		}

		.circle_wr_3 {
			right: -60px;
			top: 50%;
			width: 150px;
			height: 150px;
		}
	}
`;

export const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 3fr 2fr;
	grid-template-columns: 1fr;
	grid-template-areas: 'numbers'
								'phones';
	gap: 80px;
	
	@media(min-width: 750px) {
		grid-template-columns: 6fr 4fr;
		grid-template-rows: 1fr;
		grid-template-areas: 'phones numbers';
		gap: 0;
	}
`;

export const StyledImageWr = styled.article`
	z-index: 10;
	grid-area: phones;
`;

export const StyledNumbersCounterWr = styled.article`
	grid-area: numbers;
	
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	
	.single_number {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 20px 0;
		
		p {
			margin: 0;
			padding: 0;
			font-size: 48px;
			font-weight: 700;
			font-family: ${({theme}) => theme.fontFamilyOpenSans};
		}
	}

	@media(min-width: 750px) {
		margin-right: auto;
	}
`;

export const StyledBottomSection = styled.div`
	width: 100%;
	position: absolute;
	bottom: -5px;
	left: 0;
	
	svg {
		width: 100%;
		fill: #f2f2f2;
	}
`;

export const StyledButton = styled.button`
	color: ${({theme}) => theme.colorBlack};
	background-color: ${({theme}) => theme.colorPeach};
	font-family: ${({theme}) => theme.fontFamilyOpenSans};
	font-size: 14px;
	height: 42px;
	border: none;
	padding: 5px 30px;
	border-radius: 50px;
	margin-top: 10px;
	font-weight: 400;
`