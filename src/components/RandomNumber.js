import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const RandomNumber = ({ id, randomNum, isDisabled, onPress }) => {
  
  const handlePress = () => {
    onPress(id)
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[styles.random, isDisabled && styles.selected]}>{randomNum}</Text>
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
  selected: {
    opacity:  0.3,
  }
});

export default RandomNumber;
