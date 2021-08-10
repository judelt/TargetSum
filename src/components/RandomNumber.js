import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const RandomNumber = ({ randomNum }) => {
  
  const handlePress = () => {
    console.log(randomNum)
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.random}>{randomNum}</Text>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 25,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
});

export default RandomNumber;
