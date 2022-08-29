import React, {FC, useRef, useEffect, MutableRefObject} from 'react';
import Image from 'next/image';

import {Power3} from 'gsap';
import gsap from 'gsap';

// Assets
import PersonPng from '../../../assets/person.png';
import SvgWave from '../../../assets/wave.svg';

// Hooks
import UseScrollToSection from '../../../hooks/UseScrollToSection.hook';

// Styled Components
import {StyledImageWrapper, Wrapper, StyledContentWrapper, StyledCircle, StyledBottomSection, OuterWrapper, StyledButton} from './HeroSection.styles';

// Components
import Circle from '../../elements/circle/Circle.component';
import RowTemplate from '../../templates/RowTemplate';

interface IHeroSection {
	meetingRef: MutableRefObject<HTMLDivElement>;
}

const HeroSection: FC<IHeroSection> = ({meetingRef}) => {
	const headline = useRef<any>(null);
	const subtitle = useRef<any>(null);
	const imageRef = useRef<any>(null);
	const timeLine = useRef<any>(null);
	const buttonRef = useRef<any>(null);

	const {handleScrollToSection} = UseScrollToSection();
	
	useEffect(() => {
		timeLine.current = gsap.timeline();
		
		timeLine.current
			.set([headline.current, buttonRef.current],
				{autoAlpha:0})
			.fromTo(headline.current,
				{x: -100, autoAlpha: 0, ease: Power3.easeOut},
				{x: 0, autoAlpha: 1, duration: .8})
			.fromTo(buttonRef.current,
				{x: -100, autoAlpha: 0,},
				{x: 0, autoAlpha: 1, duration: .4})
			.fromTo(imageRef.current, 
				{y: '+=20', autoAlpha: 0}, 
				{y: 0, autoAlpha: 1, duration: .8})
			.fromTo(subtitle.current,
				{x: -200, autoAlpha: 0, ease: Power3.easeInOut},
				{x: 0, autoAlpha: 1, duration: 1})
		
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
						<StyledButton 
							ref={buttonRef} 
							onClick={() => handleScrollToSection(meetingRef)}
						>
							Umów się na rozmowę
						</StyledButton>
					</StyledContentWrapper>
					<StyledImageWrapper ref={imageRef}>
						<Image src={PersonPng} alt="Owner" layout='responsive' priority={true}/>
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
