import {
  Text,
  View,
  Image,
  Alert,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import AppComp from '../components/AppComp';
import {colors, hp, strings, wp} from '../helper/GlobalFunc';
import ButtonComp from '../components/ButtonComp';
import TextInputComp from '../components/TextInputComp';
import ConstantImages from '../helper/constants/ConstantImages';

const SignIn = props => {
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [passEr, setPassEr] = useState('');
  const [emailEr, setEmailEr] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const passValidation = () => {
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{7,}$/;

    if (pass.length === 0) {
      setPassEr('password must be entered');
    } else if (reg.test(pass) === false) {
      setPassEr(
        'password must contain seven characters including one uppercase letter, one lowercase letter and one number. ',
      );
    } else if (reg.test(pass) === true) {
      setPassEr('');
    }
  };

  const emailValidation = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (email.length === 0) {
      setEmailEr('Email address must be enter');
    } else if (reg.test(email) === false) {
      setEmailEr('Enter valid email address');
    } else if (reg.test(email) === true) {
      setEmailEr('');
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <Image source={ConstantImages.logo} style={styles.image} />

      <Text style={styles.text}>{strings.signIn.acc}</Text>
      <View style={{marginVertical: 30}}>
        <TextInputComp
          text={'Email'}
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
          error={emailEr}
          onSubmitEditing={() => emailValidation()}
          onBlur={() => emailValidation()}
          // onFocus={() => emailValidation()}
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
          onSubmitEditing={() => passValidation()}
          onBlur={() => passValidation()}
          // onFocus={() => passValidation()}
          error={passEr}
        />
      </View>

      <ButtonComp
        text={strings.button.signIn}
        customStyle={{backgroundColor: colors.lightGreen}}
        onPress={() => {
          if (email === '' || pass === '') {
            if (email === '') {
              setEmailEr('Email address must be enter');
            }

            if (pass === '') {
              setPassEr('password must be entered');
            }
          } else if (emailEr || passEr) {
            passValidation();
            emailValidation();
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
          marginTop: hp(26),
          marginBottom: hp(30),
        }}>
        {strings.signIn.or}
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

      <View style={styles.signUp}>
        <Text style={styles.textInputHead}>{strings.signIn.noAcc}</Text>
        <TouchableOpacity
          onPress={() => {
            console.log('entered');
            props.navigation.navigate('CreateAcc');
          }}>
          <Text style={{...styles.textInputHead, color: colors.lightGreen}}>
            {' '}
            {strings.button.signIn}
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
    marginTop: hp(91),
    marginBottom: hp(73),
  },

  imageView: {
    alignItems: 'center',
    marginTop: hp(91),
    marginBottom: hp(73),
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
    marginHorizontal: wp(51),
    marginTop: hp(52),
  },

  textInput: {
    height: hp(42),
    width: hp(288),
    backgroundColor: colors.offWhite,
    marginVertical: hp(13),
    borderRadius: 10,
  },

  error: {
    color: 'red',
    fontSize: 12,
  },

  buttonView: {
    marginHorizontal: wp(40),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  signUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(43),
  },
  
});
