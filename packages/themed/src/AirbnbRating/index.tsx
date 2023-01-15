import { withTheme } from '../config';
import {
  AirbnbRating,
  TapRatingProps,
} from '@dplus/rn-ui/dist/AirbnbRating/index';

export { AirbnbRating };
export type { TapRatingProps };
export const AirbnbRatingDefault = withTheme(AirbnbRating, 'AirbnbRating');
