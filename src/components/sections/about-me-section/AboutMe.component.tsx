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

// eslint-disable-next-line react/display-name
const AboutMe = forwardRef((Props, ref: ForwardedRef<HTMLDivElement>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<any>(null);

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
        <SectionTitle title="Kilka słów o mnie" />
        <Wrapper ref={ref}>
          <PhotoWr>
            <Image src={AvatarImg} layout="responsive" alt="Mikolaj_zdjecie" />
          </PhotoWr>
          <AboutWr>
            <h4>Kim jestem?</h4>
            <ul>
              <li>
                Ponad <b>800</b> osób wzięło udział w moich szkoleniach, w tym
                Ambasada USA z siedzibą w Warszawie, zespół Dyrektor Mary Kay
                Polska
              </li>
              <li>
                Specjalizuję się w kampaniach Lead Generation oraz E-commerce
              </li>
              <li>
                {" "}
                <b>2 000 000</b> wygenerowanej sprzedaży dla moich klientów
              </li>
              <li>
                {" "}
                <b>74+</b> zadowolonych klientów
              </li>
              <li>
                Z ciekawostek - studiuję kierunek Multimedia Design w Kopenhadze
              </li>
            </ul>
            <p>Znajdziesz mnie w social mediach</p>
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
