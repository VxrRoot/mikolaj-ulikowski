import {FC, useState} from 'react';

// Templates
import MainTemplate from '../components/templates/MainTemplate.template';

// Svg
import SvgLogo from '../assets/logo_peach.svg';

// Styled Components
import {StyledWrapper, StyledHeader, LogoWrapper, StyledNav, StyledMobileMenu} from './HomePage.styles';

const HomePage: FC = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	
	const showMenu = () => {
		setShowMobileMenu(prev => !prev);
	}
	
	return (
		<StyledWrapper>
			<MainTemplate>
				<>
					{
						<StyledMobileMenu isActive={showMobileMenu}>
							Mobile menu
						</StyledMobileMenu>
					}
					<StyledHeader>
						<LogoWrapper>
							<SvgLogo />
						</LogoWrapper>
						<StyledNav>
							<div
								className="burger_wr"
								onClick={showMenu}
							>
								<div className={`burger ${showMobileMenu && 'isActive'}`} />
							</div>
						</StyledNav>
					</StyledHeader>
				</>
			</MainTemplate>
		</StyledWrapper>
	);
};

export default HomePage;
