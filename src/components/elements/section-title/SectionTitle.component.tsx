import React, {FC} from 'react';

interface ISectionTitle {
	title: string
}

// Styled Components
import {StyledSectionTitle} from './SectionTitle.styles';

const SectionTitle: FC<ISectionTitle> = ({title}) => {
	return (
		<StyledSectionTitle>
			<h3>
				{title}
			</h3>
		</StyledSectionTitle>
	);
};

export default SectionTitle;
