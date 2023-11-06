import { FC, MutableRefObject } from "react";
import { useTranslation } from "react-i18next";

// Hooks
import UseScrollToSection from "../../../hooks/UseScrollToSection.hook";

// Styled Components
import { StyledNavigation } from "./DesktopNav.styles";

interface IDesktopNav {
  offerRef: MutableRefObject<HTMLDivElement>;
  opinionRef: MutableRefObject<HTMLDivElement>;
  contactRef: MutableRefObject<HTMLDivElement>;
}

const DesktopNav: FC<IDesktopNav> = ({ offerRef, opinionRef, contactRef }) => {
  const { t } = useTranslation();

  const { handleScrollToSection } = UseScrollToSection();

  return (
    <StyledNavigation>
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
      </ul>
    </StyledNavigation>
  );
};

export default DesktopNav;
