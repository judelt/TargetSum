import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import RandomNumber from './RandomNumber';

const Game = ({
  shuffledrandomNumbers,
  randomNumbers,
  randomNumberCount,
  initialSeconds,
  setRandomNumberCount,
  onPlayAgain,
  attempt,
  setAttempt,
  level,
  setLevel,
}) => {
  console.log('render game');

  const [selectedIds, setSelectedIds] = useState([]);
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);

  let intervalId;
  useEffect(() => {
    setTimeout(
      clearInterval,
      (initialSeconds + 1) * 1000,
      (intervalId = setInterval(() => {
        setRemainingSeconds(prev => prev - 1);
      }, 1000)),
    );
    return () => clearInterval(intervalId);
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
    if (remainingSeconds === 0 && gameStatus === 'PLAYING' || sumSelected > target) {
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

  const NextLevel = () => {
    setLevel(prev => prev + 1);
    setRandomNumberCount(prev => prev + 1);
    onPlayAgain();
  };

  const resetGame = () => {
    setAttempt(prev => prev + 1);
    setLevel(prev => prev);
    onPlayAgain();
  };

  return (
    <View style={styles.container}>
      {gameStatus !== 'PLAYING' ? (
        <>
          <Text style={styles.target}> {`YOU ${gameStatus}`} </Text>
          {gameStatus === 'WON' && (
            <>
              <Text>{`Number of attempts ${attempt}`}</Text>
              <Button title="Next level" onPress={NextLevel}></Button>
            </>

          )}
          {gameStatus === 'LOST' && (
            <Button title="Try Again" onPress={resetGame}></Button>
          )}
        </>
      ) : (
        <>
          <Text style={styles.target}>{`Level: ${level}`}</Text>
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
