import { FC, Fragment } from 'react';

import styled from 'styled-components';

import SvgLogo from '../../assets/logo_peach.svg';

export const Wrapper = styled.div`
   width: 100%;
   height: auto;

   svg {
      width: 100%;
      height: auto;
   }
`;

const Logo: FC = () => {
   return (
      <Wrapper>
         <SvgLogo />
      </Wrapper>

   );
}

export default Logo;