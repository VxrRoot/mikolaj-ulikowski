import styled from "styled-components";

interface ISwitch {
  isBlack: boolean;
}

export const StyledLangButton = styled.button<ISwitch>`
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 100%;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  /* color: white; */
  color: black;
  color: ${({ isBlack }) => (isBlack ? "black" : "white")};

  svg {
    /* fill: #ffffff !important; */
    /* fill: black !important; */
    fill: ${({ isBlack }) => (isBlack ? "black" : "white")};
  }
`;
