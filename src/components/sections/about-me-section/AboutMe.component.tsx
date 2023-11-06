import React, { useEffect, useRef, forwardRef, ForwardedRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { gsap } from "gsap";

// Styled Components
import {
  Wrapper,
  StyledSection,
  PhotoWr,
  AboutWr,
  StyledCircle,
} from "./AboutMe.styles";

// Assets
import AvatarImg from "../../../assets/mikolaj - koło.png";

// Components
import SectionTitle from "../../elements/section-title/SectionTitle.component";
import RowTemplate from "../../templates/RowTemplate";
import Circle from "../../elements/circle/Circle.component";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/display-name
const AboutMe = forwardRef((Props, ref: ForwardedRef<HTMLDivElement>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<any>(null);

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
    <StyledSection ref={wrapperRef}>
      <RowTemplate>
        <SectionTitle title={t("me-sec-title")} />
        <Wrapper ref={ref}>
          <PhotoWr>
            <Image src={AvatarImg} layout="responsive" alt="Mikolaj_zdjecie" />
          </PhotoWr>
          <AboutWr>
            <h4>{t("me-sec-who")}</h4>
            <ul>
              <li>
                <p
                  style={{ fontWeight: 400 }}
                  dangerouslySetInnerHTML={{ __html: t("me-sec-inf-1") }}
                />
              </li>
              <li>
                <p
                  style={{ fontWeight: 400 }}
                  dangerouslySetInnerHTML={{ __html: t("me-sec-inf-2") }}
                />
              </li>
              <li>
                <p
                  style={{ fontWeight: 400 }}
                  dangerouslySetInnerHTML={{ __html: t("me-sec-inf-3") }}
                />
              </li>
              <li>
                <p
                  style={{ fontWeight: 400 }}
                  dangerouslySetInnerHTML={{ __html: t("me-sec-inf-4") }}
                />
              </li>
              <li>
                <p
                  style={{ fontWeight: 400 }}
                  dangerouslySetInnerHTML={{ __html: t("me-sec-inf-5") }}
                />
              </li>
            </ul>
            <p dangerouslySetInnerHTML={{ __html: t("me-sec-find-me") }} />
            <div className="social_icons">
              <div className="single_icon">
                <Link href="https://www.instagram.com/mikolaj.ulikowski/">
                  <a target="_blank">
                    <AiFillInstagram />
                  </a>
                </Link>
              </div>
              <div className="single_icon">
                <Link href="https://www.facebook.com/ulikowskimarketing">
                  <a target="_blank">
                    <AiFillFacebook />
                  </a>
                </Link>
              </div>
              <div className="single_icon">
                <Link href="https://www.linkedin.com/in/mikolajulikowski/">
                  <a target="_blank">
                    <AiFillLinkedin />
                  </a>
                </Link>
              </div>
            </div>
          </AboutWr>
        </Wrapper>
      </RowTemplate>
      <StyledCircle>
        <Circle />
      </StyledCircle>
    </StyledSection>
  );
});

export default AboutMe;
