import styled from 'styled-components';

interface IStyledMobileMenu {
	isActive: boolean;
}

export const StyledMobileMenu = styled.div<IStyledMobileMenu>`
	display: block;
	position: fixed;
	z-index: 9;
	left: ${({isActive}) => isActive ? '0' : '-100%'};
	top: 0;
	transition: .3s;
	width: 100%;
	height: 100%;
	background-color: ${({theme}) => theme.colorBlack};
	
	@media(min-width: 1024px) {
		display: none;
	}
`;

export const StyledLogoWrapper = styled.div`
	width: 100%;
	margin-top: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
	
	svg {
		width: auto;
		height: 40px;
		fill: ${({theme}) => theme.colorWhite};
	}
`;

export const StyledNav = styled.nav`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	
	ul {
		position: relative;
		list-style-type: none;
		width: 100%;
		padding: 0;
		margin: 0;
		
		li {
			width: auto;
			margin: 20px 0;
			cursor: pointer;
			font-size: 21px;
			text-align: center;
			color: ${({theme}) => theme.colorWhite};
			
			a {
				display: inline-block;
				margin: auto;
				position: relative;
				overflow: hidden;
				
				&:before {
					content: "";
					position: absolute;
					width: 50%;
					height: 2px;
					bottom: 0;
					background-color: ${({theme}) => theme.colorPeach};
					left: -50%;
					transition: .3s;
				}
				
				&:hover {
					&:before {
						left: 0;
					}
				}
			}
		}
	}
`;