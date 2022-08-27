import styled from 'styled-components';

export const Wrapper = styled.div`
	z-index: 2;
	background-color: white;
	border-radius: 25px;
	padding: 20px;
	flex: 1 1 300px;
`;

export const StyledTitle = styled.div`
	position: relative;
	display: inline-block;
	
	h4 {
		margin: 0;
		font-size: 20px;
		font-weight: 700;
		
		&::before {
			content: "";
			background-color: ${({theme}) => theme.colorPeach};
			width: 30%;
			height: 4px;
			position: absolute;
			left: 0;
			bottom: -4px;
		}
	}

`;

export const StyledParagraph = styled.p`

`;