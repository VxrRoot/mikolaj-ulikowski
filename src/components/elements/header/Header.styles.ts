import styled, { keyframes } from "styled-components";

interface IWrapper {
  isMobile: boolean;
  isBlack: boolean;
}

interface IisBlack {
  isBlack: boolean;
}

interface IBurger {
  isBlack: boolean;
  isOpen: boolean;
}

const animationBurger1 = keyframes`
	from {
		background-color: white;
	}
	to {
		background-color: transparent;
	}
`;

const animationBurger2 = keyframes`
	50% {
		top: 0;
		transform: rotate(0);
	}
	
	100% {
		top: 0;
		transform: rotate(45deg);
	}
`;

const animationBurger3 = keyframes`
	50% {
		top: 0;
		transform: rotate(0);
	}
	
	100% {
		top: 0;
		transform: rotate(-45deg);
	}
`;

export const Wrapper = styled.div<IWrapper>`
  position: ${({ isMobile }) => (isMobile ? "fixed" : "absolute")};
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
  padding-bottom: 8px;
  /* background-color: ${({ isBlack }) =>
    isBlack ? "black" : "transparent"}; */
  color: ${({ isBlack }) => (isBlack ? "black" : "white")};

  @media (min-width: 1024px) {
    padding-top: 12px;
    padding-bottom: 18px;
  }
`;

export const StyledHeader = styled.header`
  padding: 16px 16px 0 16px;
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    padding-top: 8px;
  }
`;

export const LogoWrapper = styled.div<IisBlack>`
  margin-top: 6px;
  cursor: pointer;

  svg {
    width: auto;
    height: 34px;
    fill: ${({ theme, isBlack }) => (isBlack ? "#0a2328" : theme.colorPeach)};
  }

  @media (min-width: 1024px) {
    margin-top: 0;

    svg {
      width: auto;
      height: 40px;
      fill: ${({ theme, isBlack }) => (isBlack ? "#0a2328" : theme.colorPeach)};
    }
  }
`;

export const StyledBurger = styled.div<IBurger>`
  position: relative;
  width: 100%;

  .lang_wr {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 50px;
  }

  .burger_wr {
    z-index: 10;
    display: flex;
    position: absolute;
    cursor: pointer;
    right: 0;
    top: 0;
    width: 35px;
    height: 40px;

    .burger {
      position: absolute;
      cursor: pointer;
      width: 100%;
      height: 3px;
      /* background-color: white; */
      background-color: ${({ isBlack, isOpen }) =>
        isBlack ? "black" : "white"};

      top: 50%;
      transform: translateY(-50%);

      &:after,
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        /* background-color: white; */
        background-color: ${({ isBlack }) => (isBlack ? "black" : "white")};
      }

      &:after {
        top: 12px;
      }

      &:before {
        top: -12px;
      }

      &.isActive {
        animation: ${animationBurger1} 0.2s forwards;

        &:before {
          background-color: white;
          animation: ${animationBurger2} 0.5s 0.2s forwards;
        }

        &:after {
          background-color: white;
          animation: ${animationBurger3} 0.5s 0.2s forwards;
        }
      }
    }

    @media (min-width: 1024px) {
      display: none;
    }
  }
`;
