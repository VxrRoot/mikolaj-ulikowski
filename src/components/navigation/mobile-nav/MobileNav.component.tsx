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
import { useRouter } from "next/router";

const MobileNav: FC<ModelMobileNav> = ({
  isOpen,
  offerRef,
  showMenu,
  contactRef,
  opinionRef,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { handleScrollToSection } = UseScrollToSection(showMenu);

  return (
    <StyledMobileMenu isActive={isOpen}>
      <StyledLogoWrapper>
        <SvgLogo />
      </StyledLogoWrapper>
      <StyledNav>
        <ul>
          <li>
            <span
              onClick={() => {
                if (offerRef) {
                  handleScrollToSection(offerRef);
                } else {
                  router.push("/");
                }
              }}
              style={{ whiteSpace: "nowrap" }}
            >
              {t("nav-home")}
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                if (offerRef) {
                  handleScrollToSection(offerRef);
                } else {
                  router.push("/");
                }
              }}
            >
              {t("nav-oferta")}
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                if (opinionRef) {
                  handleScrollToSection(opinionRef);
                } else {
                  router.push("/");
                }
              }}
            >
              {t("nav-opinie")}
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                if (contactRef) {
                  handleScrollToSection(contactRef);
                } else {
                  router.push("/");
                }
              }}
            >
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
