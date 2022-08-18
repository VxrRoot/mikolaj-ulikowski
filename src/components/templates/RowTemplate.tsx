import {FC} from 'react';
import styled from 'styled-components';

interface IRowTemplate {
	children: JSX.Element | JSX.Element[];
}

const Wrapper = styled.div`
	max-width: 1200px;
	padding: 0 8px;
	margin: 0 auto;
`;

const RowTemplate: FC<IRowTemplate> = ({children}) => {
	return (
		<Wrapper>
			{children}
		</Wrapper>
	);
};

export default RowTemplate;
