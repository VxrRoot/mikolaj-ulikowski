import {FC, MutableRefObject} from 'react';
import styled from 'styled-components';

// Components
import Header from '../elements/header/Header.component';
import Footer from '../elements/footer/Footer.component';

interface IMainTemplate {
	children: JSX.Element | JSX.Element[];
	offerRef: MutableRefObject<HTMLDivElement>;
	opinionRef: MutableRefObject<HTMLDivElement>;
}

const Wrapper = styled.div`
	position: relative;
`;

const MainTemplate: FC<IMainTemplate> = ({children, offerRef, opinionRef}) => {
	return (
		<Wrapper>
			<Header
				offerRef={offerRef}
				opinionRef={opinionRef}
			/>
			<main>
				{children}
			</main>
			<Footer />
		</Wrapper>
	);
};

export default MainTemplate;
