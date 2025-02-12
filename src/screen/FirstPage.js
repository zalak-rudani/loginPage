import React from 'react';
import {ImageBackground, StyleSheet, Text, Image, View} from 'react-native';

import ConstantImages from './constants/ConstantImages';
import ButtonComp from '../components/ButtonComp';

const FirstPage = props => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={ConstantImages.ImageBackground}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.whiteLogoView}>
          <Image style={styles.whiteLogo} source={ConstantImages.whiteLogo} />
        </View>
        <Text style={styles.font}>HOPE FOR</Text>
        <Text style={{...styles.font, fontWeight: '900'}}>HUMANITY</Text>
        <View style={{marginTop: 140, marginBottom: 32}}>
          <Text
            style={{
              ...styles.font,
              fontWeight: '600',
              fontSize: '29',
              color: '#005014',
            }}>
            {' Welcome to \n hope for humanity'}
          </Text>
        </View>

        <ButtonComp
          text={'Explore'}
          onPress={() => props.navigation.navigate('SignIn')}
        />
      </ImageBackground>
    </View>
  );
};
export default FirstPage;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'red',
  },

  image: {
    flex: 1,
  },

  whiteLogo: {
    height: 121,
    width: 121,
  },

  whiteLogoView: {
    marginTop: 280,
    marginHorizontal: 135,
    marginBottom: 26,
  },

  font: {
    fontWeight: '500',
    color: '#fff',
    fontSize: '35',
    textAlign: 'center',
  },
});
