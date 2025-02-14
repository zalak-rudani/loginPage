import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ConstantImages from '../helper/constants/ConstantImages';
import LinearGradient from 'react-native-linear-gradient';

const First = () => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={ConstantImages.coffeeBG}
        resizeMode="contain"
        style={styles.image}></ImageBackground>

      {/* <LinearGradient colors={['#00ffff', '#000', '#fff']}></LinearGradient> */}
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
