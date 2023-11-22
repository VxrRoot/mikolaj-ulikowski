import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "../../elements/section-title/SectionTitle.component";
import RowTemplate from "../../templates/RowTemplate";
import { Answer, FAQContainer, FAQItem, Question } from "./FAQSection.styles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AllFaqItemsType } from "../../../models/getDataQuery.model";
import i18n from "../../../../i18n";

interface IFAQSection {
  faq: AllFaqItemsType;
}

const FAQSection: FC<IFAQSection> = ({ faq }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const { t } = useTranslation();

  const faqData = [
    { question: "Pierwsze pytanie?", answer: "Odpowiedź na pierwsze pytanie." },
    { question: "Drugie pytanie?", answer: "Odpowiedź na drugie pytanie." },
  ];

  const handleToggle = (index: any) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <RowTemplate>
      <SectionTitle title={t("faq-sec-title")} />
      <FAQContainer>
        {faq.map((item, index) => (
          <FAQItem key={index} onClick={() => handleToggle(index)}>
            <Question expanded={expandedIndex === index}>
              <p>
                {i18n.language === "pl" ? item.questionPl : item.questionEn}
              </p>
              <MdOutlineKeyboardArrowDown />
            </Question>
            {expandedIndex === index && (
              <Answer expanded={expandedIndex === index}>
                {i18n.language === "pl" ? item.answearPl : item.answearEn}
              </Answer>
            )}
          </FAQItem>
        ))}
      </FAQContainer>
    </RowTemplate>
  );
};

export default FAQSection;
