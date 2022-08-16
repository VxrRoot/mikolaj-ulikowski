import styled, {keyframes} from 'styled-components';

interface IStyledMobileMenu {
	isActive: boolean;
}

const animationBurger1 = keyframes`
	from {
		background-color: black;
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
	
	min-height: 100vh;
	background-color: #333;
	padding: 8px;
	
	
	@media(min-width: 1024px) {
		padding: 20px;
	}
`

export const InnerWrapper = styled.div`
	overflow-y: hidden;
`

export const StyledHeader = styled.header`
	display: flex;
`

export const StyledNav = styled.nav`
	position: relative;
	width: 100%;
	height: 100px;
	
	.burger_wr {
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
					background-color: black;
					animation: ${animationBurger2} .5s .2s forwards;
				}
				
				&:after {
					background-color: black;
					animation: ${animationBurger3} .5s .2s forwards;
				}
			}
		}

		@media(min-width: 1024px) {
			display: none;
		}
	}
`;

export const StyledMobileMenu = styled.div<IStyledMobileMenu>`
	position: absolute;
	left: ${({isActive}) => isActive ? '0' : '100%'};
	top: 0;
	transition: .3s;
	width: 100%;
	height: 100%;
	background-color: white;
`;

export const LogoWrapper = styled.div`
	svg {
		width: auto;
		height: 40px;
	}

	@media(min-width: 1024px) {
		svg {
			width: 200px;
			height: auto;
		}
	}
`
