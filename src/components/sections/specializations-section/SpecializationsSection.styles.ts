import styled from 'styled-components';

export const OuterWrapper = styled.section`
	position: relative;
	background-color: #f2f2f2;
	padding: 50px 0;
`;

export const Wrapper = styled.div`
	margin-bottom: 50px;
	
	@media(min-width: 1024px) {
		margin-bottom: 150px;
	}
`;

export const StyledBottomSection = styled.div`
	width: 100%;
	position: absolute;
	bottom: -5px;
	left: 0;
	
	svg {
		width: 100%;
		fill: white;
	}
`;

export const StyledSpecializationsWrapper = styled.div`
	margin: auto;
	
	.items_wr {
		padding: 0 16px;
		margin-top: 60px;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 40px;
	}
	
	
	@media (min-width: 670px) {
		
		.items_wr {
			flex-direction: row;
			gap: 60px;
		}
	}
`;

export const StyledCircle = styled.div`
	z-index: 1;
	position: absolute;
	width: 200px;
	height: 200px;
	top: 48%;
	left: -30px;
	
	@media(min-width: 1024px) {
		width: 300px;
		height: 300px;
		left: -160px;
		top: 40%;
	}
`;