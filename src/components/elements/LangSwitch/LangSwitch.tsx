import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";
import { BsTranslate } from "react-icons/bs";

import { StyledLangButton } from "./LangSwitch.styles";
import { useRouter } from "next/router";

const LangSwitch = () => {
  const { t } = useTranslation();

  const router = useRouter();
  const containsBlog = router.asPath.includes("/blog");

  const changeLanguage = () => {
    const newLang = i18n.language === "pl" ? "en" : "pl";
    i18n.changeLanguage(newLang);
  };

  return (
    <div>
      <StyledLangButton
        isBlack={containsBlog}
        onClick={() => changeLanguage()}
        className=""
      >
        <BsTranslate />
        {i18n.language === "pl" ? "EN" : "PL"}
      </StyledLangButton>
    </div>
  );
};

export default LangSwitch;
