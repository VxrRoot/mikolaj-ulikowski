import styled from "styled-components";

interface INav {
  isBlack: boolean;
}

export const StyledNavigation = styled.nav<INav>`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;

    ul {
      margin: 0 0 0 100px;
      padding: 0;
      list-style-type: none;
      display: flex;

      li {
        margin: 0 25px;
        cursor: pointer;
        height: 24px;

        span,
        a {
          margin: auto;
          height: 100%;
          display: flex;
          align-items: center;
          position: relative;
          cursor: pointer;
          overflow-y: hidden;
          color: ${({ isBlack }) => (isBlack ? "black" : "white")};

          &:before {
            content: "";
            position: absolute;
            width: 50%;
            height: 2px;
            bottom: 0;
            background-color: ${({ theme }) => theme.colorPeach};
            left: -50%;
            transition: 0.3s;
          }

          &:hover {
            cursor: pointer;
            &:before {
              left: 0;
            }
          }
        }
      }
    }
  }
`;
