import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: transparent;
  cursor: pointer;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  border: 1px solid ${({ theme }) => theme.colorPeach};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const StyledParagraph = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;
