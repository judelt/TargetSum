/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text,  View} from 'react-native';

const Game = () => {

  const target = 10 + Math.floor(40 * Math.random())
  return (
    <View style={styles.container}>
      <Text style={styles.target}>{target}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    paddingTop: 50,
  },
  target: {
    fontSize: 40,
    backgroundColor: '#aaa',
    marginHorizontal: 50,
    textAlign: 'center',
  },
});

export default Game;
