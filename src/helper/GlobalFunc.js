import {Dimensions} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const colors = {
  white: '#fff',
  lightGreen: '#00B140',
  darkGreen: '#005014',
  lightGray: '#6F6F6F',
  gray: '#888888',
  darkGray: '#6F6F6F',
  offWhite: '#FAFAFA',
};

export const screenHeight = Dimensions.get('screen').height;
export const screenWidth = Dimensions.get('screen').width;

export const wp = val => {
  return widthPercentageToDP(val * 100) / screenWidth;
};

export const hp = val => {
  return heightPercentageToDP(val * 100) / screenHeight;
};

export const fontSize = {
  font7: hp(1.0),
  font8: hp(1.1),
  font9: hp(1.2),
  font10: hp(1.3),
  font11: hp(1.4),
  font12: hp(1.5),
  font13: hp(1.6),
  font14: hp(1.7),
  font15: hp(1.8),
  font16: hp(1.9),
  font17: hp(2),
  font18: hp(2.1),
  font19: hp(2.2),
  font20: hp(2.3),
  font21: hp(2.4),
  font22: hp(2.5),
  font23: hp(2.6),
  font24: hp(2.7),
  font25: hp(2.8),
  font26: hp(2.9),
  font27: hp(3.0),
};

export const validEmail = text => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(text);
};
