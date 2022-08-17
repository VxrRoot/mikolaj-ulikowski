import styled from 'styled-components';

export const StyledButton = styled.button`
	color: ${({theme}) => theme.colorBlack};
	background-color: ${({theme}) => theme.colorPeach};
	height: 42px;
	border: none;
	padding: 5px 15px;
	border-radius: 50px;
	margin-top: 10px;
	font-weight: 600;
`
