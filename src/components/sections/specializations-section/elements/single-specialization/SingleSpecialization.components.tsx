import React, {ForwardedRef, forwardRef} from 'react';

// Styled Components
import {Wrapper, StyledTitle, StyledParagraph} from './SingleSpecialization.styles';

interface ISingleSpecialization {
	title: string;
	desc: string;
}

// eslint-disable-next-line react/display-name
const SingleSpecialization = forwardRef(({title, desc}: ISingleSpecialization, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<Wrapper ref={ref}>
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
});

export default SingleSpecialization;
