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
import Cumple from './src/components/cumple';
import Animal from './src/TALLER1/animal';
const App = () => {
  return (
    
    <>
      <View style={{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Animal/>
        {/* <Text> Clase de app </Text>
        <Cumple title="Mi Cumpleaños Feliz" name="Braulio"/>
        <Cumple />
        <Cumple title="Otro Cumpleaños Feliz" name ="Mario"/> */}
      </View>
    </>
  )
};

export default App;
