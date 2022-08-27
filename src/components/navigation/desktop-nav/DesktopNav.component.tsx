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
							<a href={item.href}>
								{item.name}
							</a>
						</li>
					))
				}
			</ul>
		</StyledNavigation>
	);
};

export default DesktopNav;
