import {FC, MutableRefObject} from 'react';

// Hooks
import UseScrollToSection from '../../../hooks/UseScrollToSection.hook';

// Styled Components
import {StyledNavigation} from './DesktopNav.styles';

interface IDesktopNav {
	offerRef: MutableRefObject<HTMLDivElement>;
	opinionRef: MutableRefObject<HTMLDivElement>;
	contactRef: MutableRefObject<HTMLDivElement>;
}

const DesktopNav: FC<IDesktopNav> = ({offerRef, opinionRef, contactRef}) => {

	const {handleScrollToSection} = UseScrollToSection();
	
	return (
		<StyledNavigation>
			<ul>
				<li>
					<span>
						Home
					</span>
				</li>
				<li>
					<span onClick={() => handleScrollToSection(offerRef)}>
						Oferta
					</span>
				</li>
				<li>
					<span onClick={() => handleScrollToSection(opinionRef)}>
						Opinie
					</span>
				</li>
				<li>
					<span onClick={() => handleScrollToSection(contactRef)}>
						Kontakt
					</span>
				</li>
			</ul>
		</StyledNavigation>
	);
};

export default DesktopNav;
