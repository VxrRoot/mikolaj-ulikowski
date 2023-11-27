import { FC } from "react";

// Assets
import SvgLogo from "../../../assets/logo.svg";

// Hooks
import UseScrollToSection from "../../../hooks/UseScrollToSection.hook";

// Styled Components
import {
  StyledMobileMenu,
  StyledLogoWrapper,
  StyledNav,
} from "./MobileNav.styles";

// Models
import { ModelMobileNav } from "./MobileNav.model";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const MobileNav: FC<ModelMobileNav> = ({
  isOpen,
  offerRef,
  showMenu,
  contactRef,
  opinionRef,
}) => {
  const { t } = useTranslation();

  const { handleScrollToSection } = UseScrollToSection(showMenu);

  return (
    <StyledMobileMenu isActive={isOpen}>
      <StyledLogoWrapper>
        <SvgLogo />
      </StyledLogoWrapper>
      <StyledNav>
        <ul>
          <li>
            <span style={{ whiteSpace: "nowrap" }}>{t("nav-home")}</span>
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
          <li>
            <Link href="/blog">{t("nav-blog")}</Link>
          </li>
        </ul>
      </StyledNav>
    </StyledMobileMenu>
  );
};

export default MobileNav;
