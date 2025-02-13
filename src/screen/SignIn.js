import {
  Alert,
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import AppComp from '../components/AppComp';
import {colors} from '../helper/GlobalFunc';
import ButtonComp from '../components/ButtonComp';
import TextInputComp from '../components/TextInputComp';
import ConstantImages from './constants/ConstantImages';

const SignIn = props => {
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [passEr, setPassEr] = useState('');
  const [emailEr, setEmailEr] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const passValidation = val => {
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{7,}$/;

    if (val.length === 0) {
      setPassEr('password must be enter');
    } else if (reg.test(val) === false) {
      setPassEr(
        'password must contain seven characters including one uppercase letter, one lowercase letter and one number. ',
      );
    } else if (reg.test(val) === true) {
      setPassEr('');
    }
  };

  const emailValidation = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (val.length === 0) {
      setEmailEr('Email address must be enter');
    } else if (reg.test(val) === false) {
      setEmailEr('Enter valid email address');
    } else if (reg?.test(val) === true) {
      setEmailEr('');
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <Image source={ConstantImages.logo} style={styles.image} />

      <Text style={styles.text}>Sign in your account</Text>
      <View style={{marginVertical: 30}}>
        <TextInputComp
          text={'Email'}
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
          onPressIn={() => setEmailEr('')}
          error={emailEr}
          onSubmitEditing={text => emailValidation(text)}
          multiline={true}
        />
        <TextInputComp
          text={'Password'}
          value={pass}
          source={passwordVisible ? ConstantImages.hide : ConstantImages.view}
          secureTextEntry={!passwordVisible}
          onPress={() => setPasswordVisible(!passwordVisible)}
          onChangeText={text => {
            setPass(text);
          }}
          onSubmitEditing={text => passValidation(text)}
          onPressIn={() => setPassEr('')}
          error={passEr}
        />
      </View>

      <ButtonComp
        text={'SIGN IN'}
        onPress={() => {
          // if (email === '' || pass === '') {
          //   Alert.alert('Value must be enter');
          //   return;
          // }
          if (emailEr || passEr) {
            if (emailEr) {
              setEmailEr(emailEr);
            }
            if (passEr) {
              setPassEr(passEr);
            }
          } else {
            props.navigation.navigate('CreateAcc');
          }
        }}
      />

      <Text
        style={{
          ...styles.text,
          fontSize: 20,
          fontWeight: '400',
          color: colors.gray,
          marginTop: 26,
          marginBottom: 30,
        }}>
        or sign in with
      </Text>

      <View style={styles.buttonView}>
        <AppComp
          source={ConstantImages.goggle}
          onPress={() => Alert.alert('Google Pressed!')}
        />

        <AppComp
          source={ConstantImages.twitter}
          onPress={() => Alert.alert('Twitter Pressed')}
        />
        <AppComp
          source={ConstantImages.fb}
          onPress={() => Alert.alert('Facebook Pressed')}
        />
      </View>

      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 43}}>
        <Text style={styles.textInputHead}>Don’t have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            console.log('entered');
            props.navigation.navigate('CreateAcc');
          }}>
          <Text style={{...styles.textInputHead, color: colors.lightGreen}}>
            {' '}
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },

  image: {
    height: 54,
    width: 54,
    alignSelf: 'center',
    marginTop: 91,
    marginBottom: 73,
  },

  imageView: {
    alignItems: 'center',
    marginTop: 91,
    marginBottom: 73,
  },

  text: {
    fontSize: 27,
    fontWeight: '600',
    textAlign: 'center',
  },

  textInputHead: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.lightGray,
  },

  textInputView: {
    marginHorizontal: 51,
    marginTop: 52,
  },

  textInput: {
    height: 42,
    width: 288,
    backgroundColor: colors.offWhite,
    marginVertical: 13,
    borderRadius: 10,
  },

  error: {
    color: 'red',
    fontSize: 12,
  },

  buttonView: {
    marginHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
