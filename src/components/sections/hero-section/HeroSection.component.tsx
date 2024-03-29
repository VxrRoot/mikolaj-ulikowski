import React, { FC, useRef, useEffect, MutableRefObject } from "react";
import Image from "next/image";
import gsap from "gsap";
import * as fbq from "../../../../lib/fpixel";

// Assets
import PersonPng from "../../../assets/person.png";
import SvgWave from "../../../assets/wave.svg";

// Hooks
import UseScrollToSection from "../../../hooks/UseScrollToSection.hook";

// Styled Components
import {
  StyledImageWrapper,
  Wrapper,
  StyledContentWrapper,
  StyledCircle,
  StyledBottomSection,
  OuterWrapper,
  StyledButtonWr,
  StyledButton,
} from "./HeroSection.styles";

// Components
import Circle from "../../elements/circle/Circle.component";
import RowTemplate from "../../templates/RowTemplate";
import { useTranslation } from "react-i18next";

interface IHeroSection {
  meetingRef: MutableRefObject<HTMLDivElement>;
  pageContent: {
    headline: string;
    subtitle: string;
  };
}

const HeroSection: FC<IHeroSection> = ({ meetingRef, pageContent }) => {
  const headline = useRef<any>(null);
  const subtitle = useRef<any>(null);
  const imageRef = useRef<any>(null);
  const timeLine = useRef<any>(null);
  const buttonRef = useRef<any>(null);
  const contentWrapperRef = useRef<any>(null);

  const { t } = useTranslation();

  const { handleScrollToSection } = UseScrollToSection();

  useEffect(() => {
    timeLine.current = gsap.timeline();

    timeLine.current
      .fromTo(
        contentWrapperRef.current,
        { y: "+=50", autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8 }
      )
      .fromTo(
        imageRef.current,
        { y: "+=50", autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8, delay: -0.5 }
      );

    return () => timeLine.current.kill();
  }, [timeLine]);

  const handleClickBookConsultation = () => {
    fbq.event("Contact", { value: 1 });
    handleScrollToSection(meetingRef);
  };

  return (
    <OuterWrapper>
      <RowTemplate>
        <Wrapper>
          <StyledContentWrapper ref={contentWrapperRef}>
            <h1
              ref={headline}
              // dangerouslySetInnerHTML={{ __html: pageContent.headline }}
              dangerouslySetInnerHTML={{ __html: t("headline") }}
            />
            <span className="space" />
            <h2
              className="subtitle"
              ref={subtitle}
              // dangerouslySetInnerHTML={{ __html: pageContent.subtitle }}
              dangerouslySetInnerHTML={{ __html: t("subtitle") }}
            />
            <StyledButtonWr>
              <StyledButton
                ref={buttonRef}
                onClick={handleClickBookConsultation}
              >
                {t("button-book")}
              </StyledButton>
            </StyledButtonWr>
          </StyledContentWrapper>
          <StyledImageWrapper ref={imageRef}>
            <Image
              src={PersonPng}
              alt="Owner"
              layout="responsive"
              priority={true}
            />
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
