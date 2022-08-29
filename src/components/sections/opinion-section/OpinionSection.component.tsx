import {ForwardedRef, forwardRef, useRef, useEffect} from 'react';
import Image from 'next/image';
import gsap from 'gsap';

// Swiper
import {
	Swiper,
	SwiperSlide,
} from 'swiper/react';
import {
	Navigation,
	Pagination,
	Autoplay,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Assets
import imageUser from '../../../assets/mikolaj - koło.png';

// Styled Components
import {Wrapper, OuterWrapper, SliderWrapper, ButtonsWr, StyledCircle} from './OpinionSection.styles';

// Components
import RowTemplate from '../../templates/RowTemplate';
import SectionTitle from '../../elements/section-title/SectionTitle.component';
import Circle from '../../elements/circle/Circle.component';

// eslint-disable-next-line react/display-name
const OpinionSection = forwardRef((Props, ref: ForwardedRef<HTMLDivElement>) => {
	const timeline = useRef<any>(null);
	const wrapperRef = useRef<any>(null);
	
	useEffect(() => {
		timeline.current = gsap.timeline({
			scrollTrigger: {
				trigger: wrapperRef.current,
				start: 'top bottom'
			}
		})
		
		timeline.current.fromTo(wrapperRef.current,
			{autoAlpha: 0, y: '+=100'},
			{autoAlpha: 1, y: 0, duration: 1});
	}, []);
	
	return (
		<OuterWrapper ref={ref}>
			<RowTemplate>
				<Wrapper ref={wrapperRef}>
					<SectionTitle title="Zobacz co mówią o nas klienci" />
					<SliderWrapper>
						<Swiper
							className="swiper"
							spaceBetween={100}
							modules={[Navigation, Autoplay]}
							navigation={{
								prevEl: '.prev_btn',
								nextEl: '.next_btn',
							}}
							autoplay={{
								delay: 5000
							}}
							slidesPerView={1}
							breakpoints={{
								1024: {
									slidesPerView: 2,
								}
							}}
							speed={1000}
						>
							<SwiperSlide className="slide">
								<div className="img_wr">
									<Image src={imageUser} width={80} height={80} alt="author"/>
								</div>
								<div className="slide_content">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, asperiores beatae commodi cum dicta distinctio, earum eum fuga illo inventore labore libero molestias natus nesciunt, possimus reprehenderit rerum sed temporibus.</p>
									<div className="author">Dawid Slowik</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="slide">
								<div className="img_wr">
									<Image src={imageUser} width={80} height={80} alt="author"/>
								</div>
								<div className="slide_content">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, asperiores beatae commodi cum dicta distinctio, earum eum fuga illo inventore labore libero molestias natus nesciunt, possimus reprehenderit rerum sed temporibus.</p>
									<div className="author">Dawid Slowik</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="slide">
								<div className="img_wr">
									<Image src={imageUser} width={80} height={80} alt="author"/>
								</div>
								<div className="slide_content">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, asperiores beatae commodi cum dicta distinctio, earum eum fuga illo inventore labore libero molestias natus nesciunt, possimus reprehenderit rerum sed temporibus.</p>
									<div className="author">Dawid Slowik</div>
								</div>
							</SwiperSlide>
							<ButtonsWr>
								<div className="prev_btn" />
								<div className="next_btn" />
							</ButtonsWr>
						</Swiper>
					</SliderWrapper>
					<StyledCircle>
						<Circle />
					</StyledCircle>
				</Wrapper>
			</RowTemplate>
		</OuterWrapper>
	);
});

export default OpinionSection;
