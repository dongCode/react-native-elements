import { Switch, SwitchProps } from '@dplus/rn-ui/dist/Switch/Switch';
import { withTheme } from '../config';

export { Switch };
export type { SwitchProps };
export default withTheme<SwitchProps>(Switch, 'Switch');
