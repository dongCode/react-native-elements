import { withTheme } from '../config';
import {
  SearchBar,
  SearchBarProps,
} from '@dplus/rn-ui/dist/SearchBar/SearchBar';
import { SearchBarAndroidProps } from '@dplus/rn-ui/dist/SearchBar/SearchBar-android';
import { SearchBarIosProps } from '@dplus/rn-ui/dist/SearchBar/SearchBar-ios';
import { SearchBarDefaultProps } from '@dplus/rn-ui/dist/SearchBar/SearchBar-default';

export { SearchBar };
export type {
  SearchBarProps,
  SearchBarAndroidProps,
  SearchBarDefaultProps,
  SearchBarIosProps,
};

export default withTheme<SearchBarProps>(SearchBar, 'SearchBar');
