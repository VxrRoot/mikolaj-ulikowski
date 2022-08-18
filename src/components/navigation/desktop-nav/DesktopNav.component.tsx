import {FC} from 'react';

// Data
import {navItems} from '../Navigation.data';

// Styled Components
import {StyledNavigation} from './DesktopNav.styles';

const DesktopNav: FC = () => {
	return (
		<StyledNavigation>
			<ul>
				{
					navItems.map((item, idx) => (
						<li key={idx}>
							<span>
								{item}
							</span>
						</li>
					))
				}
			</ul>
		</StyledNavigation>
	);
};

export default DesktopNav;
