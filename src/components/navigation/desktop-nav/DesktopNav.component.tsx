import {FC, MutableRefObject} from 'react';

// Styled Components
import {StyledNavigation} from './DesktopNav.styles';

interface IDesktopNav {
	offerRef: MutableRefObject<HTMLDivElement>;
	opinionRef: MutableRefObject<HTMLDivElement>;
}

const DesktopNav: FC<IDesktopNav> = ({offerRef, opinionRef}) => {
	
	const handleScrollToSection = (refElement: MutableRefObject<HTMLDivElement> ) => {
		refElement.current?.scrollIntoView({behavior: 'smooth'});
	}
	
	return (
		<StyledNavigation>
			<ul>
				<li>
					<span onClick={() => handleScrollToSection(offerRef)}>
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
					<span onClick={() => handleScrollToSection(offerRef)}>
						Kontakt
					</span>
				</li>
			</ul>
		</StyledNavigation>
	);
};

export default DesktopNav;
