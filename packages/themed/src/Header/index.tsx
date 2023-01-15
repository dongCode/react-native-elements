import { withTheme } from '../config';
import { Header, HeaderProps } from '@dplus/rn-ui/dist/Header/Header';

export { Header };
export type { HeaderProps };
export default withTheme<HeaderProps>(Header, 'Header');
