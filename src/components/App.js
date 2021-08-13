/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import Game from './Game';
import shuffle from 'lodash.shuffle';

const App = () => {
  const [randomNumberCount, setRandomNumberCount] = useState(4);
  const [gameId, setGameId] = useState(1);
  const [level, setLevel] = useState(1);
  const [attempt, setAttempt] = useState(1);

  const resetGame = () => {
    setGameId((prev) => prev + 1)
  }

  const randomNumbers = Array.from({length: randomNumberCount}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );
  const shuffledrandomNumbers = shuffle(randomNumbers);
  const initialSeconds = 10;
  console.log('render app');
  return (
    <Game
      key={gameId}
      randomNumberCount={randomNumberCount}
      shuffledrandomNumbers={shuffledrandomNumbers}
      initialSeconds={initialSeconds}
      randomNumbers={randomNumbers}
      setRandomNumberCount={setRandomNumberCount}
      onPlayAgain={resetGame}
      level={level}
      setLevel={setLevel}
      attempt={attempt}
      setAttempt={setAttempt}
    />
  );
};

export default App;
