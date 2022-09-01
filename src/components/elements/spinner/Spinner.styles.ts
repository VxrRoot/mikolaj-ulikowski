import styled, {keyframes} from 'styled-components';

const Round = keyframes`
   0% {
     -webkit-transform: rotate(0deg);
     transform: rotate(0deg);
   }
   100% {
     -webkit-transform: rotate(360deg);
     transform: rotate(360deg);
   }
`;

export const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   border: 4px solid ${({theme}) => theme.colorPeach};
   border-radius: 50%;
   position: relative;
   -webkit-animation: ${Round} 1.7s infinite ease-in-out;
   animation: ${Round} 1.7s infinite ease-in-out;
`;

export const StyledSpinner = styled.div`
   content: "";
   position: absolute;
   border-radius: 50%;
   top: -4px;
   left: calc(50% - 2px);
   width: 4px;
   height: 4px;
   background-color: ${({theme}) => theme.darkPeach};
`;