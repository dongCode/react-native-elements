import { withTheme } from '../config';
import { Rating, SwipeRatingProps } from '@dplus/rn-ui/dist/Rating/Rating';

export { Rating };
export type { SwipeRatingProps };
export default withTheme(Rating, 'Rating');
