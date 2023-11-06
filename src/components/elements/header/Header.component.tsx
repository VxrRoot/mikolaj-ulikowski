import React, { FC, MutableRefObject, useState } from "react";

// Assets
import SvgLogo from "../../../assets/logo.svg";

// Styled Components
import {
  StyledBurger,
  StyledHeader,
  LogoWrapper,
  Wrapper,
} from "./Header.styles";

// Components
import DesktopNav from "../../navigation/desktop-nav/DesktopNav.component";
import MobileNav from "../../navigation/mobile-nav/MobileNav.component";
import RowTemplate from "../../templates/RowTemplate";
import LangSwitch from "../LangSwitch/LangSwitch";

interface IHeader {
  offerRef: MutableRefObject<HTMLDivElement>;
  opinionRef: MutableRefObject<HTMLDivElement>;
  contactRef: MutableRefObject<HTMLDivElement>;
}

const Header: FC<IHeader> = ({ offerRef, opinionRef, contactRef }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const showMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <Wrapper isMobile={showMobileMenu}>
      <RowTemplate>
        <StyledHeader>
          <LogoWrapper>
            <SvgLogo />
          </LogoWrapper>
          <DesktopNav
            offerRef={offerRef}
            opinionRef={opinionRef}
            contactRef={contactRef}
          />
          <StyledBurger>
            <div className="lang_wr">
              <LangSwitch />
            </div>
            <div className="burger_wr" onClick={showMenu}>
              <div className={`burger ${showMobileMenu && "isActive"}`} />
            </div>
          </StyledBurger>
          <MobileNav
            isOpen={showMobileMenu}
            offerRef={offerRef}
            opinionRef={opinionRef}
            contactRef={contactRef}
            showMenu={showMenu}
          />
        </StyledHeader>
      </RowTemplate>
    </Wrapper>
  );
};

export default Header;
