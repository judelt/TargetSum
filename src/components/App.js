/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Game from './Game';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <Game randomNumberCount={ 6 }/>
  );
};

export default App;
