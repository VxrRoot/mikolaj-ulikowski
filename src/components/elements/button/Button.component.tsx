import {FC} from 'react';

// Model
import {ModelButton} from './Button.model';

// Styled Components
import {StyledButton} from './Button.styles';

const Button: FC<ModelButton> = ({isButton, value}) => {
	return (
		<StyledButton>
			{value}
		</StyledButton>
	);
};

export default Button;
