import React, {FC, useEffect, useRef} from 'react';
import Image from 'next/image';
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

// Assets
import ImgPhones from '../../../assets/tele.png';
import SvgWave from '../../../assets/wave.svg';

// Styled Components
import {Container ,Wrapper, StyledNumbersCounterWr, StyledImageWr, StyledBottomSection, StyledButton} from './StatisticsSection.styles';

// Components
import RowTemplate from '../../templates/RowTemplate';
import Circle from '../../elements/circle/Circle.component';

gsap.registerPlugin(ScrollTrigger);

const StatisticsSection: FC = () => {
	const timeline = useRef<any>(null)
	const refImage = useRef<any>(null)
	
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
					start: 'top bottom',
				}});
	}, [])
	
	return (
		<Container>
			<RowTemplate>
				<Wrapper>
					<StyledImageWr ref={refImage}>
						<Image src={ImgPhones} layout='responsive' alt="phones" />
					</StyledImageWr>
					<StyledNumbersCounterWr>
						<div className="single_number">
							<p>9</p>
							<StyledButton>
								Aktywni klienci
							</StyledButton>
						</div>
						<div className="single_number">
							<p>25000 pln</p>
							<StyledButton>
								Miesięczny budzet
							</StyledButton>
						</div>
						<div className="single_number">
							<p>6.3</p>
							<StyledButton>
								średnia ROI
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
