import styled from 'styled-components';

export const StyledButton = styled.button`
	color: ${({theme}) => theme.colorBlack};
	background-color: ${({theme}) => theme.colorPeach};
	height: 52px;
	border: none;
	padding: 5px 15px;
	border-radius: 50px;
	margin-top: 14px;
	font-weight: 600;
	font-size: 16px;
	
	&:hover {
		cursor: pointer;
		background-color: red !important;
	}
`;
