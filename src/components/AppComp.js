import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../helper/GlobalFunc';

const AppComp = ({source, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image resizeMode="contain" style={styles.image} source={source} />
    </TouchableOpacity>
  );
};

export default AppComp;

const styles = StyleSheet.create({
  button: {
    height: hp(42),
    width: wp(86),
    backgroundColor: 'gray',
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: hp(27),
    width: hp(27),
  },
});
