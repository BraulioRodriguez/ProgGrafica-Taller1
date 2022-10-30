/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import Parcial from './src/PARCIAL1/parcial';
const App = () => {
  return (
    
    <>
      <View style={{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Parcial/>
      </View>
    </>
  )
};

export default App;
