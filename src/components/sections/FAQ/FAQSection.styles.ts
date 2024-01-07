import styled from "styled-components";

export const StyledSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colorWhite};
  padding: 50px 0;
`;

export const FAQContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 60px auto;
  margin-bottom: 120px;
  z-index: 100 !important;
`;

export const FAQItem = styled.div`
  border: 2px solid ${({ theme }) => theme.colorPeach};
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: white;
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

export const StyledCircle1 = styled.div`
  z-index: 0;
  position: absolute;
  width: 150px;
  height: 150px;
  top: 12%;
  left: 60px;

  @media (min-width: 650px) {
    top: 30%;
  }

  @media (min-width: 1200px) {
    width: 200px;
    height: 200px;
    top: 45%;
  }

  @media (min-width: 1200px) {
    width: 300px;
    height: 300px;
  }
`;

export const StyledCircle2 = styled.div`
  display: none;
  z-index: 0;
  position: absolute;
  width: 100px;
  height: 100px;
  top: 10%;
  right: 10%;

  @media (min-width: 750px) {
    display: block;
  }
`;
