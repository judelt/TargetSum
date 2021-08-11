import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import RandomNumber from './RandomNumber';

const Game = ({randomNumbers, randomNumberCount}) => {
  console.log('render game');

  const [selectedIds, setSelectedIds] = useState([]);

  const target = randomNumbers
    .slice(0, randomNumberCount - 2)
    .reduce((acc, currentValue) => acc + currentValue, 0);

  const isSelected = numberInd => selectedIds.indexOf(numberInd) >= 0;

  const selectNumber = numberInd => {
    if (!selectedIds[numberInd]) {
      setSelectedIds(prev => [...prev, numberInd]);
    }
  };

  const gameStatus = () => {
    const sumSelected = selectedIds.reduce(
      (acc, curr) => acc + randomNumbers[curr],
      0,
    );
    console.log(sumSelected);
    if (sumSelected < target) {
      return 'PLAYING';
    }
    if (sumSelected === target) {
      return 'WON';
    }
    if (sumSelected > target) {
      return 'LOST';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.target, styles[`STATUS_${gameStatus()}`]]}>
        {target}
      </Text>
      <View style={styles.randomContainer}>
        {randomNumbers.map((randomNum, i) => (
          <RandomNumber
            key={i}
            id={i}
            randomNum={randomNum}
            isDisabled={isSelected(i) || gameStatus() !== 'PLAYING'}
            onPress={selectNumber}
          />
        ))}
      </View>
      <Text>{gameStatus()} </Text>
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
  STATUS_PLAYING: {
    backgroundColor: '#bbb',
  },
  STATUS_WON: {
    backgroundColor: 'green',
  },
  STATUS_LOST: {
    backgroundColor: 'red',
  },
});

export default Game;
