import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import RandomNumber from './RandomNumber';

const Game = ({
  shuffledrandomNumbers,
  randomNumbers,
  randomNumberCount,
  initialSeconds,
}) => {
  console.log('render game');

  const [selectedIds, setSelectedIds] = useState([]);
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);

  useEffect(() => {
    setTimeout(
      clearInterval,
      (initialSeconds + 1) * 1000,
      setInterval(() => {
        setRemainingSeconds(prev => prev - 1);
      }, 1000),
    );
  }, []);

  const target = randomNumbers
    .slice(0, randomNumberCount - 2)
    .reduce((acc, currentValue) => acc + currentValue, 0);

  const isSelected = numberInd => selectedIds.indexOf(numberInd) >= 0;

  const selectNumber = numberInd => {
    if (!selectedIds.includes(numberInd)) {
      setSelectedIds(prev => [...prev, numberInd]);
    }
  };

  const setGameStatus = () => {
    const sumSelected = selectedIds.reduce(
      (acc, curr) => acc + shuffledrandomNumbers[curr],
      0,
    );
    if (remainingSeconds === 0 || sumSelected > target) {
      return 'LOST';
    }
    if (sumSelected < target) {
      return 'PLAYING';
    }
    if (sumSelected === target) {
      return 'WON';
    }
  };
  const gameStatus = setGameStatus();

  return (
    <View style={styles.container}>
      {!remainingSeconds ? (
        <>
          <Text style={styles.target}> {`YOU ${gameStatus}`} </Text>
          <Button title='Play Again'></Button>
        </>

      ) : (
        <>
          <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>
            {target}
          </Text>
          <View style={styles.randomContainer}>
            {shuffledrandomNumbers.map((randomNum, i) => (
              <RandomNumber
                key={i}
                id={i}
                randomNum={randomNum}
                isDisabled={isSelected(i) || gameStatus !== 'PLAYING'}
                onPress={selectNumber}
              />
            ))}
          </View>
          <Text style={styles.target}>{remainingSeconds} </Text>
        </>
      )}
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
