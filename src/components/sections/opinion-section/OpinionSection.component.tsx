/* eslint-disable @next/next/no-img-element */
import { ForwardedRef, forwardRef, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Image as DatoImage } from "react-datocms";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Assets
import imageUser from "../../../assets/mikolaj - koło.png";

// Types
import { allOpinionsType } from "../../../models/getDataQuery.model";

// Styled Components
import {
  Wrapper,
  OuterWrapper,
  SliderWrapper,
  ButtonsWr,
  StyledCircle,
} from "./OpinionSection.styles";

// Components
import RowTemplate from "../../templates/RowTemplate";
import SectionTitle from "../../elements/section-title/SectionTitle.component";
import Circle from "../../elements/circle/Circle.component";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";

interface IOpinionSection {
  allOpinions: allOpinionsType;
}

// eslint-disable-next-line react/display-name
const OpinionSection = forwardRef(
  ({ allOpinions }: IOpinionSection, ref: ForwardedRef<HTMLDivElement>) => {
    const timeline = useRef<any>(null);
    const wrapperRef = useRef<any>(null);

    const { t } = useTranslation();

    useEffect(() => {
      timeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
        },
      });

      timeline.current.fromTo(
        wrapperRef.current,
        { autoAlpha: 0, y: "+=100" },
        { autoAlpha: 1, y: 0, duration: 1 }
      );
    }, []);

    return (
      <OuterWrapper ref={ref}>
        <RowTemplate>
          <Wrapper ref={wrapperRef}>
            <SectionTitle title={t("opinion-sec-title")} />
            <SliderWrapper>
              <Swiper
                className="swiper"
                spaceBetween={100}
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: ".prev_btn",
                  nextEl: ".next_btn",
                }}
                autoplay={{
                  delay: 5000,
                }}
                slidesPerView={1}
                breakpoints={{
                  1024: {
                    slidesPerView: 2,
                  },
                }}
                speed={1000}
              >
                {allOpinions.map((opinion) => (
                  <SwiperSlide key={opinion.id} className="slide">
                    <div className="img_wr">
                      <img
                        src={opinion.img?.url ? opinion.img.url : ""}
                        alt={opinion.img?.url ? opinion.img.url : "author"}
                        style={{ width: "80px", height: "80px" }}
                        className="img"
                      />
                    </div>
                    <div className="slide_content">
                      <p>
                        {i18n.language === "pl"
                          ? opinion.description
                          : opinion.descriptionEn}
                      </p>
                      <div className="author">{opinion.author}</div>
                      {opinion.company ? (
                        <p className="company_content">{opinion.company}</p>
                      ) : null}
                    </div>
                  </SwiperSlide>
                ))}
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
  }
);

export default OpinionSection;
