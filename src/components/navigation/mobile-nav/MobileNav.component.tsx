import {FC} from 'react';

// Assets
import SvgLogo from '../../../assets/logo_peach.svg';

// Data
import {NavItems} from '../Navigation.data';

// Styled Components
import {StyledMobileMenu, StyledLogoWrapper, StyledNav} from './MobileNav.styles';

// Models
import {ModelMobileNav} from './MobileNav.model';

const MobileNav: FC<ModelMobileNav> = ({isOpen}) => {
	return (
		<StyledMobileMenu isActive={isOpen}>
			<StyledLogoWrapper>
				<SvgLogo />
			</StyledLogoWrapper>
			<StyledNav>
				<ul>
					{NavItems.map((item, idx) => (
						<li
							key={idx}
						>
							<span>
								{item}
							</span>
						</li>
					))}
				</ul>
			</StyledNav>
		</StyledMobileMenu>
	);
};

export default MobileNav;
