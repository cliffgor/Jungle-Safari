import 'react-native-gesture-handler';

import Game from './src/components/Game';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';

const App = () =>(
  <GestureHandlerRootView style={{flex: 1}}>
    <Game />
  </GestureHandlerRootView>
);


export default App;