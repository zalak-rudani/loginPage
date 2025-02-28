import {Dimensions} from 'react-native';

import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const colors = {
  white: '#fff',
  lightGreen: '#00B140',
  darkGreen: '#005014',
  lightGray: '#6F6F6F',
  gray: '#888888',
  offWhite: '#FAFAFA',
  pink: 'pink',
  transparent: 'rgba(34, 51, 34, 0.2)',
};

export const strings = {
  firstPage: {
    hope: 'HOPE FOR',
    humanity: '\nHUMANITY',
    welcome: ' Welcome to \n hope for humanity',
  },
  signIn: {
    acc: 'Sign in your account',
    or: 'or sign in with',
    noAcc: 'Don’t have an account?',
  },
  createAcc: {
    create: 'Create your account',
    term: 'terms & policy.',
    understood: ' I understood the',
    haveAcc: 'Have an account?',
  },
  button: {
    explore: 'Explore',
    signIn: 'SIGN IN',
    signUp: 'SIGN UP',
  },
};

export const screenHeight = Dimensions.get('screen').height;
export const screenWidth = Dimensions.get('screen').width;

export const wp = val => {
  return widthPercentageToDP(val * 100) / screenWidth;
};

export const hp = val => {
  return heightPercentageToDP(val * 100) / screenHeight;
};
