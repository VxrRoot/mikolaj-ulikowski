import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";

// StyledComponents
import {
  StyledSection,
  CalendlyWrapper,
  StyledCircle1,
  StyledCircle2,
} from "./BookConsultation.styles";

// Components
import RowTemplate from "../../templates/RowTemplate";
import SectionTitle from "../../elements/section-title/SectionTitle.component";
import Circle from "../../elements/circle/Circle.component";
import Spinner from "../../elements/spinner/Spinner.component";
import { useTranslation } from "react-i18next";

const BookConsultation = () => {
  const [loadedWindow, setLoadedWindow] = useState<boolean>(false);

  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => setLoadedWindow(true), 5000);
  }, []);

  return (
    <StyledSection>
      <RowTemplate>
        <SectionTitle title={t("kons-sec-title")} />
        <CalendlyWrapper>
          {!loadedWindow ? (
            <div className="spinner_wr">
              <Spinner />
            </div>
          ) : (
            <InlineWidget
              url="https://calendly.com/mikolajulikowski7/30min"
              styles={{
                height: "100%",
                position: "absolute",
                width: "100%",
              }}
            />
          )}
        </CalendlyWrapper>
      </RowTemplate>
      <StyledCircle1>
        <Circle />
      </StyledCircle1>
      <StyledCircle2>
        <Circle />
      </StyledCircle2>
    </StyledSection>
  );
};

export default BookConsultation;
