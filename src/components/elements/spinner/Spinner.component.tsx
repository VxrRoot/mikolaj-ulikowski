import {FC} from 'react';

// Styled Components
import { StyledSpinner, Wrapper } from './Spinner.styles';

const Spinner: FC = () => {
   return (
      <Wrapper>
         <StyledSpinner />
      </Wrapper>
   );
}

export default Spinner;