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
`;

export const Wrapper = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 100;
`;

export const StyledHeader = styled.header`
	padding-top: 8px;
	display: flex;
	width: 100%;

	@media(min-width: 1024px) {
		padding-top: 20px;
	}
`

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