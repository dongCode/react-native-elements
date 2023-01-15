import { withTheme } from '../config';
import { FAB, FABProps } from '@dplus/rn-ui/dist/FAB/FAB';

export { FAB };
export type { FABProps };
export default withTheme<FABProps>(FAB, 'FAB');
