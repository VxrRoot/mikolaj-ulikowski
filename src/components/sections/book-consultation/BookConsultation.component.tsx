import React, {useEffect, useState} from 'react';
import {InlineWidget} from 'react-calendly';

// StyledComponents
import {StyledSection, CalendlyWrapper, StyledCircle1, StyledCircle2} from './BookConsultation.styles';

// Components
import RowTemplate from '../../templates/RowTemplate';
import SectionTitle from '../../elements/section-title/SectionTitle.component';
import Circle from '../../elements/circle/Circle.component';

const BookConsultation = () => {
	const [loadedWindow, setLoadedWindow] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => setLoadedWindow(true), 2000)
	}, [])

	return (
		<StyledSection>
			<RowTemplate>
				<SectionTitle title="Umów się na konsultację" />
				<CalendlyWrapper>
					{
						loadedWindow &&
							<InlineWidget
								url="https://calendly.com/mikolajulikowski7/30min"
								styles={{
									zIndex: "100",
									height: '100%',
									position: 'absolute',
									width: '100%'
								}}
							/>
					}
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
