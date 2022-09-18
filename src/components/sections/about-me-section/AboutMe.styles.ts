import styled from 'styled-components';

export const StyledSection = styled.section`
	position: relative;
	background-color: ${({theme}) => theme.colorWhite};
	padding: 50px 0;
`;

export const Wrapper = styled.div`
	margin-top: 50px;
	padding: 0 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	
	@media(min-width: 750px) {
		flex-direction: row;
		padding: 0 50px;
		justify-content: space-around;
		align-items: flex-start;
		gap: 80px;
	}
`;

export const PhotoWr = styled.div`
	z-index: 2;
	width: 100%;
	max-width: 300px;
`;

export const AboutWr = styled.div`
	h4 {
		font-size: 24px;
		text-align: center;
		
		@media(min-width: 750px) {
			text-align: start;
		}
	}
	
	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		
		li {
			position: relative;
			margin: 10px 0;
			line-height: 25px;
			
			&:after {
				content: "";
				position: absolute;
				left: -16px;
				top: 6px;
				width: 8px;
				height: 8px;
				border-radius: 50%;
				background-color: ${({theme}) => theme.colorPeach};
			}
		}
	}
	
	p {
		font-weight: 700;
		margin-top: 20px;
		margin-bottom: 8px;
	}

	.social_icons {
		display: flex;
		gap: 10px;

		.single_icon {
			width: 25px;
			height: 25px;
			cursor: pointer;

			svg {
				transition: .3s;
				width: 100%;
				height: 100%;
			}

			&:hover {
				svg {
					fill: ${({theme}) => theme.colorPeach};
				}
			}
		}

		@media(min-width: 860px) {
			margin-left: auto;
		}
	}
`;

export const StyledCircle = styled.div`
	z-index: 0;
	position: absolute;
	width: 100px;
	height: 100px;
	top: 30%;
	left: 14%;

	@media(min-width: 360px) {
		top: 38%;
		left: 18%;
	}
	
	@media(min-width: 750px) {
		top: 75%;
		left: 30%;
	}
`;