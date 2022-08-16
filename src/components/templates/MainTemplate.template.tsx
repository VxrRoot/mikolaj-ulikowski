import {FC} from 'react';
import styled from 'styled-components';

interface IMainTemplate {
	children: JSX.Element;
}

const Wrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	overflow: hidden !important;
`;

const MainTemplate: FC<IMainTemplate> = ({children}) => {
	return (
		<Wrapper>
			{children}
		</Wrapper>
	);
};

export default MainTemplate;
