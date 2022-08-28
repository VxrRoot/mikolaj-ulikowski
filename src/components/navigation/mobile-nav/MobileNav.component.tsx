import {FC} from 'react';

// Assets
import SvgLogo from '../../../assets/logo.svg';

// Styled Components
import {StyledMobileMenu, StyledLogoWrapper, StyledNav} from './MobileNav.styles';

// Models
import {ModelMobileNav} from './MobileNav.model';

const MobileNav: FC<ModelMobileNav> = ({isOpen, offerRef, showMenu}) => {
	
	const handleScrollToSection = () => {
		offerRef.current?.scrollIntoView({behavior: 'smooth'});
		showMenu();
	}
	
	return (
		<StyledMobileMenu isActive={isOpen}>
			<StyledLogoWrapper>
				<SvgLogo />
			</StyledLogoWrapper>
			<StyledNav>
				<ul>
					<li>
						<span onClick={handleScrollToSection}>
							Home
						</span>
					</li>
					<li>
						<span onClick={handleScrollToSection}>
							Oferta
						</span>
					</li>
					<li>
						<span onClick={handleScrollToSection}>
							Opinie
						</span>
					</li>
					<li>
						<span onClick={handleScrollToSection}>
							Kontakt
						</span>
					</li>
				</ul>
			</StyledNav>
		</StyledMobileMenu>
	);
};

export default MobileNav;
