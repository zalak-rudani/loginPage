import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {colors, hp, wp} from '../helper/GlobalFunc';

const ButtonComp = ({text, onPress, customStyle}) => {
  return (
    <TouchableOpacity style={[styles.button, customStyle]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  button: {
    height: hp(42),
    width: wp(288),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(50),
    backgroundColor: colors.transparent,
  },

  text: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
  },
});
