/**
 * This file is part of "Test work"
 * Copyright (c) 2021
 * All rights reserved
 *
 * @author Luis Barrios <nikeven@gmail.com>
 * @version 1.0
*/

import React from 'react';
import store from './src/reduxStore/store';
import Navigator from './src/components/navigator/Navigator'
import { Root } from 'native-base';
import { Provider as StoreProvider } from 'react-redux'
const App: () => React$Node = () => {
  return (
    <StoreProvider store={store}>
      <Root>
        <Navigator/>
      </Root>
    </StoreProvider>
  );
};

export default App;
