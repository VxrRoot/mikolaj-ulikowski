import Link from "next/link";
import { useRouter } from "next/router";
import { FC, MutableRefObject } from "react";
import { useTranslation } from "react-i18next";

// Hooks
import UseScrollToSection from "../../../hooks/UseScrollToSection.hook";

// Styled Components
import { StyledNavigation } from "./DesktopNav.styles";

interface IDesktopNav {
  offerRef?: MutableRefObject<HTMLDivElement>;
  opinionRef?: MutableRefObject<HTMLDivElement>;
  contactRef?: MutableRefObject<HTMLDivElement>;
}

const DesktopNav: FC<IDesktopNav> = ({ offerRef, opinionRef, contactRef }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const { handleScrollToSection } = UseScrollToSection();

  return (
    <StyledNavigation>
      <ul>
        <li>
          <span style={{ whiteSpace: "nowrap" }}>{t("nav-home")}</span>
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
    </StyledNavigation>
  );
};

export default DesktopNav;
