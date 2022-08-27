import React, {FC} from 'react';

// Assets
import SvgWave from '../../../assets/wave.svg';

// Styled Components
import {StyledBottomSection, OuterWrapper, Wrapper, StyledSpecializationsWrapper, StyledCircle} from './SpecializationsSection.styles';

// Components
import RowTemplate from '../../templates/RowTemplate';
import SectionTitle from '../../elements/section-title/SectionTitle.component';
import SingleSpecialization from './elements/single-specialization/SingleSpecialization.components';
import Circle from '../../elements/circle/Circle.component';

const SpecializationsSection: FC = () => {
	return (
		<OuterWrapper id="offer">
			<RowTemplate>
				<Wrapper>
					<SectionTitle title="Obszary Specjalizacji" />
					<StyledSpecializationsWrapper>
						<span className="items_wr">
							<SingleSpecialization title="Google Ads" desc="Kampania Ads pozwala na natychmiastowe wyświetlenie reklam kierowanych do sprecyzowanej grupy Klientów i daje szybkie efekty. Ponadto w odróżnieniu od Facebooka, tutaj płacimy dopiero, gdy ktoś kliknie w nasza reklamę, a nie za wyświetlenia." />
							<SingleSpecialization title="Google Ads" desc="Kampania Ads pozwala na natychmiastowe wyświetlenie reklam kierowanych do sprecyzowanej grupy Klientów i daje szybkie efekty. Ponadto w odróżnieniu od Facebooka, tutaj płacimy dopiero, gdy ktoś kliknie w nasza reklamę, a nie za wyświetlenia." />
							<SingleSpecialization title="Google Ads" desc="Kampania Ads pozwala na natychmiastowe wyświetlenie reklam kierowanych do sprecyzowanej grupy Klientów i daje szybkie efekty. Ponadto w odróżnieniu od Facebooka, tutaj płacimy dopiero, gdy ktoś kliknie w nasza reklamę, a nie za wyświetlenia." />
							<SingleSpecialization title="Google Ads" desc="Kampania Ads pozwala na natychmiastowe wyświetlenie reklam kierowanych do sprecyzowanej grupy Klientów i daje szybkie efekty. Ponadto w odróżnieniu od Facebooka, tutaj płacimy dopiero, gdy ktoś kliknie w nasza reklamę, a nie za wyświetlenia." />
							<SingleSpecialization title="Google Ads" desc="Kampania Ads pozwala na natychmiastowe wyświetlenie reklam kierowanych do sprecyzowanej grupy Klientów i daje szybkie efekty. Ponadto w odróżnieniu od Facebooka, tutaj płacimy dopiero, gdy ktoś kliknie w nasza reklamę, a nie za wyświetlenia." />
							<SingleSpecialization title="Google Ads" desc="Kampania Ads pozwala na natychmiastowe wyświetlenie reklam kierowanych do sprecyzowanej grupy Klientów i daje szybkie efekty. Ponadto w odróżnieniu od Facebooka, tutaj płacimy dopiero, gdy ktoś kliknie w nasza reklamę, a nie za wyświetlenia." />
						</span>
					</StyledSpecializationsWrapper>
				</Wrapper>
			</RowTemplate>
			<StyledCircle>
				<Circle />
			</StyledCircle>
			<StyledBottomSection>
				<SvgWave />
			</StyledBottomSection>
		</OuterWrapper>
	);
};

export default SpecializationsSection;
