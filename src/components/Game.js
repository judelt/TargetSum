import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RandomNumber from './RandomNumber'

const Game = ({randomNumberCount}) => {
  const randomNumbers = Array.from({length: randomNumberCount}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );

  const target = randomNumbers
    .slice(0, randomNumberCount - 2)
    .reduce((acc, currentValue) => acc + currentValue, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.target}>{target}</Text>
      <View style={styles.randomContainer}>
        {randomNumbers.map((randomNum, i) => (
          <RandomNumber key={i} randomNum={randomNum} />
          // <Text style={styles.random} key={i}>{num} </Text>
          
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    paddingTop: 10,
  },
  target: {
    fontSize: 50,
    backgroundColor: '#bbb',
    margin: 50,
    textAlign: 'center',
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 25,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
});

export default Game;
