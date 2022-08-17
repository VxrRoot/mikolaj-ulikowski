import React, {FC} from 'react';
import styled from 'styled-components';

const StyledCircle = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background-color: rgb(246, 174, 133, 0.5);
`

const Circle: FC = () => {
	return (
		<StyledCircle />
	);
};

export default Circle;
