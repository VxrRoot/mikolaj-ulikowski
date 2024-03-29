import { FC, MutableRefObject } from "react";
import styled from "styled-components";

// Components
import Footer from "../elements/footer/Footer.component";
import Header from "../elements/header/Header.component";

interface IMainTemplate {
  children: JSX.Element | JSX.Element[];
  offerRef?: MutableRefObject<HTMLDivElement>;
  opinionRef?: MutableRefObject<HTMLDivElement>;
  contactRef?: MutableRefObject<HTMLDivElement>;
}

const Wrapper = styled.div`
  position: relative;
`;

const MainTemplate: FC<IMainTemplate> = ({
  children,
  offerRef,
  opinionRef,
  contactRef,
}) => {
  return (
    <Wrapper>
      <Header
        offerRef={offerRef}
        opinionRef={opinionRef}
        contactRef={contactRef}
      />
      <main>{children}</main>
      <Footer
        contactRef={contactRef}
        offerRef={offerRef}
        opinionRef={opinionRef}
      />
    </Wrapper>
  );
};

export default MainTemplate;
