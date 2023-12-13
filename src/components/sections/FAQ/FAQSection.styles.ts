import styled from "styled-components";

export const FAQContainer = styled.div`
  max-width: 800px;
  margin: 60px auto;
  margin-bottom: 120px;
`;

export const FAQItem = styled.div`
  border: 2px solid ${({ theme }) => theme.colorPeach};
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  overflow: hidden; /* Zapobiega "wyciekowi" treści po zamknięciu */
`;

export const Question = styled.div<{ expanded: boolean }>`
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  font-weight: bold;
  display: flex;

  svg {
    fill: ${({ theme }) => theme.colorPeach};
    height: 40px;
    width: auto;
    transition: 0.3s;
    ${({ expanded }) => expanded && "transform: rotate(180deg);"}
  }
`;

export const Answer = styled.div<{ expanded: boolean }>`
  border-top: 1px solid ${({ theme }) => theme.colorPeach};
  max-height: ${(props) => (props.expanded ? "1000px" : "0")};
  max-height: "1000%";
  opacity: ${(props) => (props.expanded ? "1" : "0")};
  overflow: hidden;
  transition: 0.3s;
  padding: 10px;
`;
