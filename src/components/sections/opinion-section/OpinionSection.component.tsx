import {ForwardedRef, forwardRef, useRef} from 'react';
import Image from 'next/image';

// Swiper
import {
	Swiper,
	SwiperSlide
} from 'swiper/react';
import {
	Navigation,
	Pagination,
	Autoplay
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
	const btnNext = useRef(null);
	const btnPrev = useRef(null);
	
	return (
		<OuterWrapper ref={ref}>
			<RowTemplate>
				<Wrapper>
					<SectionTitle title="Zobacz co mówią o nas klienci" />
					<SliderWrapper>
						<Swiper
							className="swiper"
							spaceBetween={100}
							modules={[Navigation, Pagination, Autoplay]}
							navigation={{
								prevEl: btnPrev.current,
								nextEl: btnNext.current
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
								<div
									ref={btnPrev}
									className="prev_btn"
								/>
								<div
									ref={btnNext}
									className="next_btn"
								/>
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
