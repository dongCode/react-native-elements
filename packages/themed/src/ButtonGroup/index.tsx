import { withTheme } from '../config';
import {
  ButtonGroup,
  ButtonGroupProps,
} from '@dplus/rn-ui/dist/ButtonGroup/ButtonGroup';

export { ButtonGroup };
export type { ButtonGroupProps };
export default withTheme<ButtonGroupProps>(ButtonGroup, 'ButtonGroup');
