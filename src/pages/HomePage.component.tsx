import React, {FC, useState} from 'react';
import Image from 'next/image';

// Templates
import MainTemplate from '../components/templates/MainTemplate.template';

// Svg
import SvgLogo from '../assets/logo_peach.svg';

// Styled Components
import {StyledWrapper, StyledHeader, LogoWrapper, StyledBurger, InnerWrapper} from './HomePage.styles';

// Components
import MobileNav from '../components/navigation/mobile-nav/MobileNav.component';
import DesktopNav from '../components/navigation/desktop-nav/DesktopNav.component';
import HeroSection from '../components/sections/hero-section/HeroSection.component';

const HomePage: FC = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	
	const showMenu = () => {
		setShowMobileMenu(prev => !prev);
	}
	
	return (
		<StyledWrapper>
				<InnerWrapper>
					<MainTemplate>
						<>
							<StyledHeader>
								<LogoWrapper>
									<SvgLogo />
								</LogoWrapper>
								<DesktopNav />
								<StyledBurger>
									<div
										className="burger_wr"
										onClick={showMenu}
									>
										<div className={`burger ${showMobileMenu && 'isActive'}`} />
									</div>
								</StyledBurger>
							</StyledHeader>
							<MobileNav isOpen={showMobileMenu} />
						</>
					</MainTemplate>
					<HeroSection />
				</InnerWrapper>
		</StyledWrapper>
	);
};

export default HomePage;
