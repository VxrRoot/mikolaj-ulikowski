import styled from 'styled-components';

export const StyledTitle = styled.div`
	position: relative;
	display: inline-block;
	transition: .5s;
	
	h4 {
		margin: 0;
		font-size: 20px;
		font-weight: 700;
		
		&::before {
			content: "";
			background-color: ${({theme}) => theme.darkPeach};
			width: 30%;
			height: 4px;
			position: absolute;
			left: 0;
			bottom: -4px;
		}
	}

`;

export const StyledParagraph = styled.p`
	margin-top: 25px;
	transition: .5s;
`;

export const Wrapper = styled.div`
	z-index: 2;
	background-color: white;
	border-radius: 25px;
	padding: 30px;
	flex: 1 1 300px;
	cursor: pointer;

	&:hover {
		background-color: #3D3938;
	}

	&:hover ${StyledParagraph} {
		color: white;
	}

	&:hover ${StyledTitle} {
		color: white;
	}
`;