import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import {colors, hp, wp} from '../helper/GlobalFunc';

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
    width: wp(86),
    height: hp(42),
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.offWhite,
  },

  image: {
    width: hp(27),
    height: hp(27),
  },
});
