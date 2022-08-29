import React, {ForwardedRef, forwardRef, createRef, useRef, useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

// Assets
import SvgWave from '../../../assets/wave.svg';

// Styled Components
import {StyledBottomSection, OuterWrapper, Wrapper, StyledSpecializationsWrapper, StyledCircle} from './SpecializationsSection.styles';

// Components
import RowTemplate from '../../templates/RowTemplate';
import SectionTitle from '../../elements/section-title/SectionTitle.component';
import SingleSpecialization from './elements/single-specialization/SingleSpecialization.components';
import Circle from '../../elements/circle/Circle.component';

const specializationsData = [
	{
		title: 'Fb Ads',
		desc: 'Kampania Ads pozwala na natychmiastowe wyświetlenie reklam kierowanych do sprecyzowanej grupy Klientów i daje szybkie efekty. Ponadto w odróżnieniu od Facebooka, tutaj płacimy dopiero, gdy ktoś kliknie w nasza reklamę, a nie za wyświetlenia.'
	},
	{
		title: 'Fb Ads',
		desc: 'Kampania Ads pozwala na natychmiastowe wyświetlenie reklam kierowanych do sprecyzowanej grupy Klientów i daje szybkie efekty. Ponadto w odróżnieniu od Facebooka, tutaj płacimy dopiero, gdy ktoś kliknie w nasza reklamę, a nie za wyświetlenia.'
	},
	{
		title: 'Fb Ads',
		desc: 'Kampania Ads pozwala na natychmiastowe wyświetlenie reklam kierowanych do sprecyzowanej grupy Klientów i daje szybkie efekty. Ponadto w odróżnieniu od Facebooka, tutaj płacimy dopiero, gdy ktoś kliknie w nasza reklamę, a nie za wyświetlenia.'
	},
	{
		title: 'Fb Ads',
		desc: 'Kampania Ads pozwala na natychmiastowe wyświetlenie reklam kierowanych do sprecyzowanej grupy Klientów i daje szybkie efekty. Ponadto w odróżnieniu od Facebooka, tutaj płacimy dopiero, gdy ktoś kliknie w nasza reklamę, a nie za wyświetlenia.'
	},
	{
		title: 'Fb Ads',
		desc: 'Kampania Ads pozwala na natychmiastowe wyświetlenie reklam kierowanych do sprecyzowanej grupy Klientów i daje szybkie efekty. Ponadto w odróżnieniu od Facebooka, tutaj płacimy dopiero, gdy ktoś kliknie w nasza reklamę, a nie za wyświetlenia.'
	},
	{
		title: 'Fb Ads',
		desc: 'Kampania Ads pozwala na natychmiastowe wyświetlenie reklam kierowanych do sprecyzowanej grupy Klientów i daje szybkie efekty. Ponadto w odróżnieniu od Facebooka, tutaj płacimy dopiero, gdy ktoś kliknie w nasza reklamę, a nie za wyświetlenia.'
	},
]

// eslint-disable-next-line react/display-name
const SpecializationsSection = forwardRef((props, ref: ForwardedRef<HTMLDivElement> ) => {
	const specializationsRefs = useRef(specializationsData.map(() => createRef<HTMLDivElement>()));
	const timeline = useRef<any>(null);
	const refWrapper = useRef<any>(null);
	
	useEffect(() => {
		const elements = specializationsRefs.current.map(el => el.current);
		
		timeline.current = gsap.timeline({
			scrollTrigger: {
				trigger: refWrapper.current,
				start: 'top center',
			}
		});
		
		timeline.current.fromTo(elements,
			{autoAlpha: 0, x: '-=100'},
			{autoAlpha: 1, x: 0, stagger: 0.2, duration: 0.8})
		
		return () => timeline.current.kill();
	}, []);
	
	
	return (
		<OuterWrapper ref={ref}>
			<RowTemplate>
				<Wrapper ref={refWrapper}>
					<SectionTitle title="Obszary Specjalizacji" />
					<StyledSpecializationsWrapper>
						<span className="items_wr">
							{
								specializationsData.map((item, idx) => (
									<SingleSpecialization
										key={idx}
										ref={specializationsRefs.current[idx]}
										title={item.title}
										desc={item.desc}
									/>
								))
							}
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
});

export default SpecializationsSection;
