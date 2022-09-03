import React, {FC, useEffect, useRef, forwardRef} from 'react';
import Image from 'next/image';
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import {useCountUp} from 'react-countup';

// Assets
import ImgPhones from '../../../assets/tele.png';
import SvgWave from '../../../assets/wave.svg';

// Styled Components
import {Container ,Wrapper, StyledNumbersCounterWr, StyledImageWr, StyledBottomSection, StyledButton} from './StatisticsSection.styles';

// Components
import RowTemplate from '../../templates/RowTemplate';
import Circle from '../../elements/circle/Circle.component';

gsap.registerPlugin(ScrollTrigger);

interface IStatisticsSection {
	clients: number,
	roi: number,
	budget: number
}

const StatisticsSection: FC<IStatisticsSection> = ({budget,clients,roi}) => {
	const {start: startClients} = useCountUp({
		end: clients,
		ref: 'clients_number',
		duration: 1.1,
		startOnMount: false,
		useEasing: true
	});
	const {start: startBudget} = useCountUp({
		end: Number(`${budget}.000`),
		ref: 'budget_number',
		suffix: 'PLN',
		duration: 1.5,
		startOnMount: false,
		decimals: 3,
		useEasing: true
	});
	const {start: startROI} = useCountUp({
		end: roi,
		start: 0.0,
		ref: 'ROI_number',
		duration: 1.3,
		startOnMount: false,
		decimals: 1,
		useEasing: true,
	});
	
	const timeline = useRef<any>(null);
	const refImage = useRef<any>(null);
	const containerRef = useRef<HTMLDivElement>(null)
	
	useEffect(() => {
		timeline.current = gsap.timeline({
			scrollTrigger: {
				trigger: refImage.current,
				start: 'top top',
				scrub: .4,
			}
		});

		gsap.fromTo(refImage.current.children, {
				x: '-=150%', autoAlpha: 0
			},
			{x: 0, autoAlpha: 1, duration: 2, ease: 'power3', stagger: 0.1, scrollTrigger: {
					trigger: refImage.current,
					start: '140px bottom',
				}});
	}, [])
	
	useEffect(() => {
		
		const handleScrollFromTop = () => {
			if(window && containerRef.current) {
				const scrollFromTop = window.scrollY;
				const distanceFromTop =  containerRef.current.offsetTop;
				if(scrollFromTop >= distanceFromTop - 500) {
					startClients();
					startBudget();
					startROI();
					window.removeEventListener('scroll', handleScrollFromTop)
				}
			}
		}
		
		if(window) {
			window.addEventListener('scroll', handleScrollFromTop)
		}
		
		return () => window.removeEventListener('scroll', handleScrollFromTop);
		
	}, [startBudget, startClients, startROI]);
	
	return (
		<Container ref={containerRef}>
			<RowTemplate>
				<Wrapper>
					<StyledImageWr ref={refImage}>
						<Image src={ImgPhones} layout='responsive' alt="phones" />
					</StyledImageWr>
					<StyledNumbersCounterWr>
						<div className="single_number">
							<p id="clients_number">
								0
							</p>
							<StyledButton>
								Aktywni klienci
							</StyledButton>
						</div>
						<div className="single_number">
							<p id="budget_number">
								0
							</p>
							<StyledButton>
								Obsługiwany budżet
							</StyledButton>
						</div>
						<div className="single_number">
							<p id="ROI_number">0.0</p>
							<StyledButton>
								Średni zwrot
							</StyledButton>
						</div>
					</StyledNumbersCounterWr>
				</Wrapper>
			</RowTemplate>
			<div className="circle_wr_1">
				<Circle />
			</div>
			<div className="circle_wr_2">
				<Circle />
			</div>
			<div className="circle_wr_3">
				<Circle />
			</div>
			<StyledBottomSection>
				<SvgWave />
			</StyledBottomSection>
		</Container>
	);
};

export default StatisticsSection;
