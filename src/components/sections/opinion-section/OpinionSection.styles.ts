import styled from 'styled-components';

export const OuterWrapper = styled.section`
	background-color: ${({theme}) => theme.colorWhite};
	padding: 50px 0;
`;

export const Wrapper = styled.section`
	position: relative;
`;

export const SliderWrapper = styled.div`
	z-index: 10;
	position: relative;
	margin-top: 50px;
	display: flex;
	min-height: 350px;
	padding: 20px 0;
	
	.slide {
		padding: 20px;
		cursor: pointer;
		background-color: ${({theme}) => theme.colorWhite};
		z-index: 10;
		border-radius: 30px;
		-webkit-box-shadow: 0px 0px 45px -25px rgba(66, 68, 90, 1);
		-moz-box-shadow: 0px 0px 45px -25px rgba(66, 68, 90, 1);
		box-shadow: 0px 0px 45px -25px rgba(66, 68, 90, 1);
		display: flex;
		gap: 15px;
		
		.img_wr {
			flex-basis: 25%;
		}
		
		.slide_content {
			flex-basis: 75%;
			
			p {
				margin: 0;
				padding: 0;
			}
			
			.author {
				position: relative;
				margin-top: 15px;
				font-weight: 700;
				font-size: 20px;

				&::before {
					content: "";
					background-color: ${({theme}) => theme.colorPeach};
					width: 15%;
					height: 4px;
					position: absolute;
					left: 0;
					bottom: -8px;
				}
			}
		}
		
		@media(min-width: 1024px) {
			gap: 0;
		}
	}
	
	.swiper {
		padding: 0 10px 50px 10px;
	}
	
	@media(min-width: 1024px) {
		
		.swiper {
			padding: 50px 30px 30px 30px;
		}
	}
`;

export const ButtonsWr = styled.div`
	display: flex;
	position: absolute;
	bottom: 10px;
	right: 50%;
	transform: translateX(50%);
	z-index: 10;
	
	.prev_btn,
	.next_btn {
		cursor: pointer;
		width: 15px;
		height: 15px;
		border-right: 3px solid ${({theme}) => theme.colorPeach};
		border-bottom: 3px solid ${({theme}) => theme.colorPeach};
		transform: rotate(-45deg);
	}
	
	.prev_btn {
		transform: rotate(135deg);
	}

	.swiper-button-disabled {
		opacity: .5;
		cursor: auto;
	}
	
	@media(min-width: 1024px) {
		transform: translateX(0);
		right: 10px;
		top: 10px;
	}
`;

export const StyledCircle = styled.div`
	z-index: 1;
	position: absolute;
	width: 100px;
	height: 100px;
	top: 60px;
	left: 80%;
	
	@media(min-width: 1024px) {
		top: 70%;
		left: 40%;
	}
`;