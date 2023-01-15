import * as React from 'react';
import { Switch, defaultTheme as theme } from '@dplus/rn-ui';
import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const SwitchPlayground = () => {
  const params = useView({
    componentName: 'Switch',
    props: {
      color: {
        value: theme.colors.primary,
        type: PropTypes.String,
        description: 'Color',
      },
      value: {
        value: false,
        type: PropTypes.Boolean,
        description: 'Value',
        stateful: true,
      },
      onValueChange: {
        value: '() => setValue(!value)',
        propHook: {
          what: '!value',
          into: 'value',
        },
        type: PropTypes.Function,
        description: 'Function called when switch state is changed.',
      },
    },
    scope: {
      Switch,
    },
    imports: {
      '@dplus/rn-ui': {
        named: ['Switch'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default SwitchPlayground;
