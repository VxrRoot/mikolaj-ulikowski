import React, {FC, Fragment} from 'react';
import Image from 'next/image';

// Assets
import PersonPng from '../../../assets/person.png';
import SvgBottom from '../../../assets/bottom_slide.svg'
import SvgWave from '../../../assets/wave.svg';

// Styled Components
import {StyledImageWrapper, Wrapper, StyledContentWrapper, StyledCircle, StyledBottomSection, OuterWrapper} from './HeroSection.styles';

// Components
import Button from '../../elements/button/Button.component';
import Circle from '../../elements/circle/Circle.component';
import RowTemplate from '../../templates/RowTemplate';

const HeroSection: FC = () => {
	return (
		<OuterWrapper>
			<RowTemplate>
				<Wrapper>
					<StyledContentWrapper>
						<h1>
							Hej! Tu Mikołaj Ulikowski,
							specjalista od e-marketingu
						</h1>
						<span className="space" />
						<p>
							Od 3 lat pomagam małym i średnim firmom zabłysnąć w internecie. <br/>
							Prowadzę kampanie marketingowe nastawione na zwiększanie sprzedaży <br/>
							Lub pozyskanie nowych klientów
						</p>
						<div className="btn_wr">
							<Button value="Umów się na rozmowę" isButton={false} />
						</div>
					</StyledContentWrapper>
					<StyledImageWrapper>
						<Image src={PersonPng} alt="Owner" layout='responsive'/>
					</StyledImageWrapper>
					<StyledCircle>
						<Circle />
					</StyledCircle>
				</Wrapper>
			</RowTemplate>
			<StyledBottomSection>
				<SvgWave />
			</StyledBottomSection>
		</OuterWrapper>


	);
};

export default HeroSection;
