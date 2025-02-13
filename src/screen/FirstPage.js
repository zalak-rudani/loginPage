import React from 'react';
import {Text, StyleSheet, View, Image, ImageBackground} from 'react-native';

import ButtonComp from '../components/ButtonComp';
import ConstantImages from './constants/ConstantImages';
import {colors} from '../helper/GlobalFunc';

const FirstPage = ({navigation}) => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={ConstantImages.ImageBackground}
        style={styles.image}>
        {/* <View style={styles.whiteLogoView}> */}
        <Image style={styles.whiteLogo} source={ConstantImages.whiteLogo} />
        {/* </View> */}
        <Text style={styles.font}>HOPE FOR</Text>
        <Text style={{...styles.font, fontWeight: '900'}}>HUMANITY</Text>
        {/* <View style={{marginTop: 140, marginBottom: 32}}> */}
        <View style={{position: 'absolute', bottom: 60}}>
          <Text
            style={{
              ...styles.font,
              fontWeight: '600',
              fontSize: '29',
              color: colors.darkGreen,
              marginBottom: 20,
            }}>
            {' Welcome to \n hope for humanity'}
          </Text>

          <ButtonComp
            text={'Explore'}
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
export default FirstPage;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  whiteLogo: {
    height: 121,
    width: 121,
    marginBottom: 20,
  },

  whiteLogoView: {
    marginTop: 280,
    marginHorizontal: 135,
    marginBottom: 26,
  },

  font: {
    fontWeight: '500',
    color: colors.white,
    fontSize: '35',
    textAlign: 'center',
  },
});
