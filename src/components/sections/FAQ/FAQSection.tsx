import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "../../elements/section-title/SectionTitle.component";
import RowTemplate from "../../templates/RowTemplate";
import { Answer, FAQContainer, FAQItem, Question } from "./FAQSection.styles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const { t } = useTranslation();

  const faqData = [
    { question: "Pierwsze pytanie?", answer: "Odpowiedź na pierwsze pytanie." },
    { question: "Drugie pytanie?", answer: "Odpowiedź na drugie pytanie." },
    // Dodaj więcej pytań i odpowiedzi według potrzeb
  ];

  const handleToggle = (index: any) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <RowTemplate>
      <SectionTitle title={t("faq-sec-title")} />
      <FAQContainer>
        {faqData.map((item, index) => (
          <FAQItem key={index} onClick={() => handleToggle(index)}>
            <Question expanded={expandedIndex === index}>
              <p>{item.question}</p>
              <MdOutlineKeyboardArrowDown />
            </Question>
            {expandedIndex === index && (
              <Answer expanded={expandedIndex === index}>{item.answer}</Answer>
            )}
          </FAQItem>
        ))}
      </FAQContainer>
    </RowTemplate>
  );
};

export default FAQSection;
