/**
 * This file is part of "Test work"
 * Copyright (c) 2021
 * All rights reserved
 *
 * @author Luis Barrios <nikeven@gmail.com>
 * @version 1.0
*/

import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Navigator from './src/components/navigator/Navigator'
import { Root } from 'native-base';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Root>
        <Navigator/>
      </Root>
    </Provider>
  );
};

export default App;
