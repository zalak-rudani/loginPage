import React from 'react';
import {Text, StyleSheet, View, Image, ImageBackground} from 'react-native';

import ButtonComp from '../components/ButtonComp';
import {colors, hp, strings, wp} from '../helper/GlobalFunc';
import ConstantImages from '../helper/constants/ConstantImages';

const FirstPage = ({navigation}) => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={ConstantImages.backgroundImage}
        style={styles.image}>
        <Image style={styles.whiteLogo} source={ConstantImages.whiteLogo} />

        <Text style={styles.font}>
          {strings.firstPage.hope}
          <Text style={{...styles.font, fontWeight: '900'}}>
            {strings.firstPage.humanity}
          </Text>
        </Text>

        <View style={styles.textView}>
          <Text
            style={{
              ...styles.font,
              fontWeight: '600',
              fontSize: '29',
              color: colors.darkGreen,
              marginBottom: hp(20),
            }}>
            {strings.firstPage.welcome}
          </Text>

          <ButtonComp
            text={strings.button.explore}
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
    height: hp(121),
    width: hp(121),
    marginBottom: 20,
  },

  whiteLogoView: {
    marginTop: hp(280),
    marginHorizontal: wp(135),
    marginBottom: hp(26),
  },

  font: {
    fontWeight: '500',
    color: colors.white,
    fontSize: '35',
    textAlign: 'center',
  },

  textView: {
    position: 'absolute',
    bottom: hp(60),
  },
});
