import { withTheme } from '../config';
import { Input, InputProps } from '@dplus/rn-ui/dist/Input/Input';

export { Input };
export type { InputProps };
export default withTheme<InputProps>(Input, 'Input');
