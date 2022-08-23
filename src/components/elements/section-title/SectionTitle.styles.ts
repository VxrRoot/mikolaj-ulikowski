import styled from 'styled-components';

export const StyledSectionTitle = styled.div`
	display: flex;
	align-items: center;
	
	h3 {
		display: inline-block;
		position: relative;
		margin: 0 auto;
		text-align: center;
		font-size: 26px;

		&::before {
			content: "";
			background-color: ${({theme}) => theme.colorPeach};
			width: 30%;
			height: 6px;
			position: absolute;
			left: 0;
			bottom: -8px;
		}
	}
`;