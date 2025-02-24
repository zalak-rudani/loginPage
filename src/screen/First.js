import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ConstantImages from '../helper/constants/ConstantImages';
import LinearGradient from 'react-native-linear-gradient';
import {hp, wp} from '../helper/GlobalFunc';

const width = Dimensions.get('screen').width;

const First = ({navigation}) => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={ConstantImages.coffeeBG}
        resizeMode="contain"
        style={styles.image}></ImageBackground>
      <Text style={styles.text}>
        {'Coffee so good,\n your taste buds\n will love it.'}
      </Text>
      <Text style={[styles.text, styles.smallText]}>
        {'The best grain, the finest roast, the \npowerful flavor.'}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Second')}>
        <Image
          resizeMode="contain"
          source={ConstantImages.goggle}
          style={styles.goggle}
        />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
    //alignItems: 'center',
  },

  image: {
    height: hp(600),
    // width: wp(410),
    // backgroundColor: 'red',
  },

  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: '34',
    fontWeight: '600',
  },
  smallText: {
    marginTop: hp(17),
    color: '#A9A9A9',
    textAlign: 'center',
    fontSize: '14',
    fontWeight: '400',
  },

  buttonText: {
    fontSize: '20',
    fontWeight: '500',
    color: '#0000008A',
  },

  button: {
    height: hp(54),
    width: wp(317),
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: wp(55),
    marginTop: hp(17),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  goggle: {
    height: hp(30),
    width: hp(30),
  },
});

//

{
  /* <LinearGradient colors={['red', '#000', '#fff']}></LinearGradient> */
}
