import React, {FC, Fragment} from 'react';
import Image from 'next/image';

// Assets
import PersonPng from '../../../assets/person.png';
import SvgBottom from '../../../assets/bottom_slide.svg'

// Styled Components
import {StyledImageWrapper, Wrapper, StyledContentWrapper, StyledCircle, StyledBottomSection} from './HeroSection.styles';

// Components
import Button from '../../elements/button/Button.component';
import Circle from '../../elements/circle/Circle.component';
import MainTemplate from '../../templates/MainTemplate';

const HeroSection: FC = () => {
	return (
		<Fragment>
			<MainTemplate>
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
			</MainTemplate>
			<StyledBottomSection>
				<SvgBottom />
			</StyledBottomSection>
		</Fragment>


	);
};

export default HeroSection;
