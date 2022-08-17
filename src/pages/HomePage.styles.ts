import styled, {keyframes} from 'styled-components';

const animationBurger1 = keyframes`
	from {
		background-color: white;
	}
	to {
		background-color: transparent;
	}
`

const animationBurger2 = keyframes`
	50% {
		top: 0;
		transform: rotate(0);
	}
	
	100% {
		top: 0;
		transform: rotate(45deg);
	}
`

const animationBurger3 = keyframes`
	50% {
		top: 0;
		transform: rotate(0);
	}
	
	100% {
		top: 0;
		transform: rotate(-45deg);
	}
`

export const StyledWrapper = styled.div`
	position: relative;
	background: rgb(53,45,42);
	background: linear-gradient(0deg, rgba(53,45,42,1) 0%, rgba(131,125,125,1) 54%);
`

export const InnerWrapper = styled.div`
	padding: 8px 8px 0 8px;

	@media(min-width: 1024px) {
		padding: 20px 20px 0 20px;
	}
`

export const StyledHeader = styled.header`
	display: flex;
	width: 100%;
`

export const StyledBurger = styled.div`
	position: relative;
	width: 100%;
	
	.burger_wr {
		z-index: 10;
		display: flex;
		position: absolute;
		cursor: pointer;
		right: 0;
		top: 0;
		width: 35px;
		height: 40px;
		
		.burger {
			position: absolute;
			cursor: pointer;
			width: 100%;
			height: 3px;
			background-color: white;
			top: 50%;
			transform: translateY(-50%);
			
			&:after,
			&:before {
				content: "";
				position: absolute;
				width: 100%;
				height: 3px;
				background-color: white;
			}
			
			&:after {
				top: 12px;
			}

			&:before {
				top: -12px;
			}
			
			&.isActive {
				animation: ${animationBurger1} .2s forwards;
				
				&:before {
					animation: ${animationBurger2} .5s .2s forwards;
				}
				
				&:after {
					animation: ${animationBurger3} .5s .2s forwards;
				}
			}
		}

		@media(min-width: 1024px) {
			display: none;
		}
	}
`;

export const LogoWrapper = styled.div`
	margin-top: 6px;
	cursor: pointer;
	
	svg {
		width: auto;
		height: 40px;
		fill: #f6ae85;
	}

	@media(min-width: 1024px) {
		margin-top: 0;
	}
`;
