import styled from 'styled-components';

export const StyledFooter = styled.footer`
	background-color: ${({theme}) => theme.colorBackgroundFooter};
`;

export const StyledParagraph = styled.p`
	position: relative;
	font-size: 32px;
	font-family: ${({theme}) => theme.fontFamilyOpenSans};
	font-weight: 700;

	&:after {
		content: "";
		position: absolute;
		left: 0;
		bottom: -15px;
		width: 100px;
		height: 6px;
		background-color: ${({theme}) => theme.colorPeach};
	}
`;

export const StyledFooterInfo = styled.div`
	.info_wr {
		display: flex;
		flex-direction: column;

		@media (min-width: 860px) {
			flex-direction: row;
		}
		
		.info {
			flex-basis: 50%;
			border-bottom: 1px solid #c3c3c3;
			
			.logo_wr {
				margin: 20px 0;
				svg {
					fill: black;
					height: 40px;
					width: auto;
				}

				@media(min-width: 860px) {
					margin-top: 40px;
					border: none;
				}
			}
			
			p {
				font-size: 16px;
				line-height: 22px;
				max-width: 500px;
				font-family: ${({theme}) => theme.fontFamilyOpenSans};
			}
			
			@media(min-width: 860px) {
				padding-right: 50px;
				border: none;
			}
		}
		
		.navigation {
			flex-basis: 25%;
			border-bottom: 1px solid #c3c3c3;
			padding-bottom: 32px;
			
			.footer_nav {
				ul {
					list-style-type: none;
					margin: 0;
					padding: 0;
					
					li {
						margin: 8px 0;
						font-family: ${({theme}) => theme.fontFamilyOpenSans};
						font-weight: 400;
						font-size: 16px;
						line-height: 22px;
					}
				}
			}

			@media(min-width: 860px) {
				border: none;
			}
		}
		
		.contact {
			flex-basis: 25%;
			padding-bottom: 32px;
			
			.contact_paragraph,
			a {
				font-family: ${({theme}) => theme.fontFamilyOpenSans};
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
			}
		}
	}
`;

export const StyledFooterCopyrights = styled.div`
	border-top: 1px solid #c3c3c3;
	
	.copy_social_wr {
		position: relative;
		padding: 30px 0;
		font-size: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		
		@media(min-width: 860px) {
			flex-direction: row;
		}
		
		.copyrights {
			align-self: center;
			margin: auto;

			@media(min-width: 860px) {
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
			}
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
	}
`;