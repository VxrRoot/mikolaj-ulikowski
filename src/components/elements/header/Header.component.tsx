import React, {FC, MutableRefObject, useState} from 'react';

// Assets
import SvgLogo from '../../../assets/logo.svg';

// Styled Components
import {StyledBurger, StyledHeader, LogoWrapper, Wrapper} from './Header.styles';

// Components
import DesktopNav from '../../navigation/desktop-nav/DesktopNav.component';
import MobileNav from '../../navigation/mobile-nav/MobileNav.component';
import RowTemplate from '../../templates/RowTemplate';

interface IHeader {
	offerRef: MutableRefObject<HTMLDivElement>;
	opinionRef: MutableRefObject<HTMLDivElement>;
}

const Header: FC<IHeader> = ({offerRef, opinionRef}) => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	
	const showMenu = () => {
		setShowMobileMenu(prev => !prev);
	}
	
	return (
		<Wrapper>
			<RowTemplate>
				<StyledHeader>
					<LogoWrapper>
						<SvgLogo />
					</LogoWrapper>
					<DesktopNav
						offerRef={offerRef}
						opinionRef={opinionRef}
					/>
					<StyledBurger>
						<div
							className="burger_wr"
							onClick={showMenu}
						>
							<div className={`burger ${showMobileMenu && 'isActive'}`} />
						</div>
					</StyledBurger>
					<MobileNav
						isOpen={showMobileMenu}
						offerRef={offerRef}
						showMenu={showMenu}
					/>
				</StyledHeader>
			</RowTemplate>
		</Wrapper>
	);
};

export default Header;
