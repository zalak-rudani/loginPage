import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import ConstantImages from '../helper/constants/ConstantImages';

const CustomDrawer = props => {
  return (
    <View style={styles.main}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.screenNameView}>
        <ImageBackground source={ConstantImages.coffee2} style={styles.imageBg}>
          <Image source={ConstantImages.lady} style={{height: 30, width: 30}} />
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  screenNameView: {
    // backgroundColor: colors.pink,
  },

  imageBg: {
    padding: 20,
    margin: 10,
  },
});
