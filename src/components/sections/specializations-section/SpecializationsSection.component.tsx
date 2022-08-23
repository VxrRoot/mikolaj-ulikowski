import React, {FC} from 'react';

// Assets
import SvgWave from '../../../assets/wave.svg';

// Styled Components
import {StyledBottomSection, OuterWrapper, Wrapper, StyledSpecializationsWrapper} from './SpecializationsSection.styles';

// Components
import RowTemplate from '../../templates/RowTemplate';
import SectionTitle from '../../elements/section-title/SectionTitle.component';
import SingleSpecialization from './elements/single-specialization/SingleSpecialization.components';

const SpecializationsSection: FC = () => {
	return (
		<OuterWrapper>
			<RowTemplate>
				<Wrapper>
					<SectionTitle title="Obszary Specjalizacji" />
					<StyledSpecializationsWrapper>
						<span className="items_wr">
							<SingleSpecialization title="Google Ads" desc="fdafsdfdsa fdasf ds asd d fsdfdasffasdfadsfasdf asd sdf sadf safa fdsa fsad  f asd fas dfsadfadsfadsfas adf" />
							<SingleSpecialization title="Google Ads" desc="fdafsdfdsa fdasf ds asd d fsdfdasffasdfadsfasdf asd sdf sadf safa fdsa fsad  f asd fas dfsadfadsfadsfas adf" />
							<SingleSpecialization title="Google Ads" desc="fdafsdfdsa fdasf ds asd d fsdfdasffasdfadsfasdf asd sdf sadf safa fdsa fsad  f asd fas dfsadfadsfadsfas adf" />
						</span>
					</StyledSpecializationsWrapper>
				</Wrapper>
			</RowTemplate>
			<StyledBottomSection>
				<SvgWave />
			</StyledBottomSection>
		</OuterWrapper>
	);
};

export default SpecializationsSection;
