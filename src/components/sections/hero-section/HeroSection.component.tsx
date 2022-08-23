import React, {FC, useRef, useEffect} from 'react';
import Image from 'next/image';

import {Power3} from 'gsap';
import gsap from 'gsap';

// Assets
import PersonPng from '../../../assets/person.png';
import SvgWave from '../../../assets/wave.svg';

// Styled Components
import {StyledImageWrapper, Wrapper, StyledContentWrapper, StyledCircle, StyledBottomSection, OuterWrapper, StyledButton} from './HeroSection.styles';

// Components
import Circle from '../../elements/circle/Circle.component';
import RowTemplate from '../../templates/RowTemplate';

const HeroSection: FC = () => {
	const headline = useRef<any>(null);
	const subtitle = useRef<any>(null);
	const timeLine = useRef<any>(null);
	const buttonRef = useRef<any>(null);
	
	useEffect(() => {
		timeLine.current = gsap.timeline();
		
		timeLine.current
			.fromTo(headline.current,
				{y: 100, autoAlpha: 0, ease: Power3.easeOut, duration: 2},
				{y: 0, autoAlpha: 1})
			.fromTo(buttonRef.current,
				{y: 100, autoAlpha: 0, ease: Power3.easeOut, duration: .5},
				{y: 0, autoAlpha: 1})
			.fromTo(subtitle.current,
				{x: -200, autoAlpha: 0, duration: 2, delay: .5},
				{x: 0, autoAlpha: 1})
		
		return () => timeLine.current.kill();
	}, [timeLine])
	
	return (
		<OuterWrapper>
			<RowTemplate>
				<Wrapper>
					<StyledContentWrapper>
						<h1 ref={headline}>
							Hej! <br/>
							Tu Mikołaj Ulikowski, <br/>
							specjalista od e-marketingu
						</h1>
						<span className="space" />
						<h2 className="subtitle" ref={subtitle}>
							Od 3 lat pomagam małym i średnim firmom zabłysnąć w internecie. <br/>
							Prowadzę kampanie marketingowe nastawione na zwiększanie sprzedaży
							Lub pozyskanie nowych klientów
						</h2>
						<StyledButton ref={buttonRef}>Umów się na rozmowę</StyledButton>
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
