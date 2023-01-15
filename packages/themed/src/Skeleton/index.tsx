import { withTheme } from '../config';
import { Skeleton, SkeletonProps } from '@dplus/rn-ui/dist/Skeleton';

export { Skeleton };
export type { SkeletonProps };

export default withTheme<SkeletonProps>(Skeleton, 'Skeleton');
