import { FC, MutableRefObject } from "react";
import Link from "next/link";

// Icons
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import { HiMail } from "react-icons/hi";

// Assets
import SvgLogo from "../../../assets/logo.svg";

// Hooks
import UseScrollToSection from "../../../hooks/UseScrollToSection.hook";

// Styled Components
import {
  StyledFooter,
  StyledFooterCopyrights,
  StyledFooterInfo,
  StyledParagraph,
} from "./Footer.styles";

// Components
import RowTemplate from "../../templates/RowTemplate";
import { useTranslation } from "react-i18next";

interface IFooter {
  offerRef?: MutableRefObject<HTMLDivElement>;
  opinionRef?: MutableRefObject<HTMLDivElement>;
  contactRef?: MutableRefObject<HTMLDivElement>;
}

const Footer: FC<IFooter> = ({ contactRef, offerRef, opinionRef }) => {
  const { handleScrollToSection } = UseScrollToSection();
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <StyledFooterInfo>
        <RowTemplate>
          <div className="info_wr">
            <div className="info">
              <div className="logo_wr" onClick={() => handleScrollToSection()}>
                <SvgLogo />
              </div>
              <p dangerouslySetInnerHTML={{ __html: t("footer-inf-1") }} />
            </div>
            <div className="navigation">
              <StyledParagraph>{t("footer-nav-p")}</StyledParagraph>
              <nav className="footer_nav">
                <ul>
                  <li>
                    <span onClick={() => handleScrollToSection(offerRef)}>
                      {t("nav-home")}
                    </span>
                  </li>
                  <li>
                    <span onClick={() => handleScrollToSection(offerRef)}>
                      {t("nav-oferta")}
                    </span>
                  </li>
                  <li>
                    <span onClick={() => handleScrollToSection(opinionRef)}>
                      {t("nav-opinie")}
                    </span>
                  </li>
                  <li>
                    <span onClick={() => handleScrollToSection(contactRef)}>
                      {t("nav-kontakt")}
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="contact">
              <StyledParagraph>{t("footer-contact-p")}</StyledParagraph>
              <a href="tel:+48-798-558-732">+48 798 558 732</a> <br />
              <a href="mailto: mikolajulikowski@gmail.com">
                mikolajulikowski7@gmail.com
              </a>
            </div>
          </div>
        </RowTemplate>
      </StyledFooterInfo>
      <StyledFooterCopyrights>
        <RowTemplate>
          <div className="copy_social_wr">
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
            <div className="copyrights">
              <p dangerouslySetInnerHTML={{ __html: t("footer-copy") }} />
              <br />
              <p className="author_paragraph">
                <p
                  dangerouslySetInnerHTML={{ __html: t("footer-created-by") }}
                />
                <a
                  href="https://www.web-nova.pl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span> Web-nova </span>
                </a>
                <a
                  href="mailto: office.webnova@gmail.com"
                  className="icon_mail_author"
                >
                  <HiMail />
                </a>
              </p>
            </div>
          </div>
        </RowTemplate>
      </StyledFooterCopyrights>
    </StyledFooter>
  );
};

export default Footer;
