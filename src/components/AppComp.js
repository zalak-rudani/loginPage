import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AppComp = ({source, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image style={styles.image} source={source} />
    </TouchableOpacity>
  );
};

export default AppComp;

const styles = StyleSheet.create({
  button: {
    height: 42,
    width: 86,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 27,
    width: 27,
  },
});
