import { withTheme } from '../config';
import { Tile, TileProps } from '@dplus/rn-ui/dist/Tile/Tile';
import { FeaturedTile as BaseFeaturedTile } from '@dplus/rn-ui/dist/Tile/components/FeaturedTile';

export type { TileProps };
export const FeaturedTile = withTheme<TileProps>(
  BaseFeaturedTile,
  'FeaturedTile'
);
export default withTheme<TileProps>(Tile, 'Tile');
