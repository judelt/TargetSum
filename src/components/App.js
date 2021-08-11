/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Game from './Game';
<script src="http://localhost:8097"></script>

const App = () => {
  const randomNumberCount = 6;
  const randomNumbers = Array.from({length: randomNumberCount}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );
  console.log('render app');
  return (
    <Game randomNumberCount={randomNumberCount} randomNumbers={randomNumbers} />
  );
};

export default App;
