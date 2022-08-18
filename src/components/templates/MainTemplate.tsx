import {FC} from 'react';
import styled from 'styled-components';

// Components
import Header from '../elements/header/Header.component';
import Footer from '../elements/footer/Footer.component';

interface IMainTemplate {
	children: JSX.Element | JSX.Element[];
}

const Wrapper = styled.div`
	position: relative;
`;

const MainTemplate: FC<IMainTemplate> = ({children}) => {
	return (
		<Wrapper>
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</Wrapper>
	);
};

export default MainTemplate;
