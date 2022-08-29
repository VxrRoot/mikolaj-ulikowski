import {FC} from 'react';

// Assets
import SvgLogo from '../../../assets/logo.svg';

// Hooks
import UseScrollToSection from '../../../hooks/UseScrollToSection.hook';

// Styled Components
import {StyledMobileMenu, StyledLogoWrapper, StyledNav} from './MobileNav.styles';

// Models
import {ModelMobileNav} from './MobileNav.model';

const MobileNav: FC<ModelMobileNav> = ({isOpen, offerRef, showMenu, contactRef, opinionRef}) => {

	const {handleScrollToSection} = UseScrollToSection(showMenu);
	
	return (
		<StyledMobileMenu isActive={isOpen}>
			<StyledLogoWrapper>
				<SvgLogo />
			</StyledLogoWrapper>
			<StyledNav>
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
			</StyledNav>
		</StyledMobileMenu>
	);
};

export default MobileNav;
