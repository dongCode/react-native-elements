import { withTheme } from '../config';
import { CardBase, CardProps } from '@dplus/rn-ui/dist/Card/Card';
import {
  CardDivider,
  CardDividerProps,
} from '@dplus/rn-ui/dist/Card/Card.Divider';
import { CardFeaturedSubtitle } from '@dplus/rn-ui/dist/Card/Card.FeaturedSubtitle';
import { CardFeaturedTitle } from '@dplus/rn-ui/dist/Card/Card.FeaturedTitle';
import { CardImage, CardImageProps } from '@dplus/rn-ui/dist/Card/Card.Image';
import { CardTitle, CardTitleProps } from '@dplus/rn-ui/dist/Card/Card.Title';
import { CardFeaturedSubtitleProps } from '@dplus/rn-ui/dist/Card';
import { CardFeaturedTitleProps } from '@dplus/rn-ui/dist/Card';

const ThemedCardDivider = withTheme<CardDividerProps>(
  CardDivider,
  'CardDivider'
);
const ThemedCardFeaturedSubtitle = withTheme(
  CardFeaturedSubtitle,
  'CardFeaturedSubtitle'
);
const ThemedCardFeaturedTitle = withTheme(
  CardFeaturedTitle,
  'CardFeaturedTitle'
);
const ThemedCardTitle = withTheme<CardTitleProps>(CardTitle, 'CardTitle');
const ThemedCardImage = withTheme<CardImageProps>(CardImage, 'CardImage');

const ThemedCard = Object.assign(withTheme(CardBase, 'Card'), {
  Divider: ThemedCardDivider,
  Image: ThemedCardImage,
  Title: ThemedCardTitle,
  FeaturedTitle: ThemedCardFeaturedTitle,
  FeaturedSubtitle: ThemedCardFeaturedSubtitle,
});

export default ThemedCard;

export type {
  CardProps,
  CardDividerProps,
  CardFeaturedSubtitleProps,
  CardFeaturedTitleProps,
  CardImageProps,
};
