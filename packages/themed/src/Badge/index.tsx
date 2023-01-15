import { withTheme } from '../config';
import { Badge, BadgeProps } from '@dplus/rn-ui/dist/Badge/Badge';
import { withBadge } from '@dplus/rn-ui/dist/Badge/withBadge';

export { Badge, withBadge };
export type { BadgeProps };
export default withTheme<BadgeProps>(Badge, 'Badge');
