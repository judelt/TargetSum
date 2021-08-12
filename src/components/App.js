/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Game from './Game';
import shuffle from 'lodash.shuffle';

const App = () => {
  const randomNumberCount = 6;
  const randomNumbers = Array.from({length: randomNumberCount}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );
  const shuffledrandomNumbers = shuffle(randomNumbers)
  const initialSeconds = 10;
  console.log('render app');
  return (
    <Game
      randomNumberCount={randomNumberCount}
      shuffledrandomNumbers={shuffledrandomNumbers}
      initialSeconds={initialSeconds}
      randomNumbers={randomNumbers}
    />
  );
};

export default App;
