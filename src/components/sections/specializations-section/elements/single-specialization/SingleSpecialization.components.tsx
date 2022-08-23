import React, {FC} from 'react';

// Styled Components
import {Wrapper, StyledTitle, StyledParagraph} from './SingleSpecialization.styles';

interface ISingleSpecialization {
	title: string;
	desc: string;
}

const SingleSpecialization: FC<ISingleSpecialization> = ({title, desc}) => {
	return (
		<Wrapper>
			<StyledTitle>
				<h4>
					{title}
				</h4>
			</StyledTitle>
			<StyledParagraph>
				{desc}
			</StyledParagraph>
		</Wrapper>
	);
};

export default SingleSpecialization;
