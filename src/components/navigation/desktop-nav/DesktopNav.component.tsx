import {FC} from 'react';

// Data
import {NavItems} from '../Navigation.data';

// Styled Components
import {StyledNavigation} from './DesktopNav.styles';

const DesktopNav: FC = () => {
	return (
		<StyledNavigation>
			<ul>
				{
					NavItems.map((item, idx) => (
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
