import React from 'react';
import {InlineWidget} from 'react-calendly';

// StyledComponents
import {StyledSection, CalendlyWrapper, StyledCircle1, StyledCircle2} from './BookConsultation.styles';

// Components
import RowTemplate from '../../templates/RowTemplate';
import SectionTitle from '../../elements/section-title/SectionTitle.component';
import Circle from '../../elements/circle/Circle.component';

const BookConsultation = () => {
	return (
		<StyledSection>
			<RowTemplate>
				<SectionTitle title="Umów się na konsultację" />
				<CalendlyWrapper>
					<InlineWidget
						url="https://calendly.com/mikolajulikowski7/30min"
						styles={{
							zIndex: "100",
							height: '700px'
						}}
					/>
				</CalendlyWrapper>
			</RowTemplate>
			<StyledCircle1>
				<Circle />
			</StyledCircle1>
			<StyledCircle2>
				<Circle />
			</StyledCircle2>
		</StyledSection>
	);
};

export default BookConsultation;
