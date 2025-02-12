import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ConstantImages from './constants/ConstantImages';
import ButtonComp from '../components/ButtonComp';
import AppComp from '../components/AppComp';

const SignIn = props => {
  const [email, setEmail] = useState('');
  const [emailEr, setEmailEr] = useState('');
  const [pass, setPass] = useState('');
  const [passEr, setPassEr] = useState('');

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
    } else if (reg.test(val) === true) {
      setEmailEr('');
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.imageView}>
        <Image source={ConstantImages.logo} style={styles.image} />
      </View>

      <Text style={styles.text}>Sign in your account</Text>

      <View style={styles.textInputView}>
        <Text style={styles.textInputHead}>Email</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={text => {
            setEmail(text);
            emailValidation(text);
          }}
        />
        {emailEr ? <Text style={styles.error}>{emailEr}</Text> : null}
      </View>
      <View style={{...styles.textInputView, marginTop: 0, marginBottom: 37}}>
        <Text style={styles.textInputHead}>Password</Text>
        <TextInput
          style={styles.textInput}
          value={pass}
          onChangeText={text => {
            setPass(text);
            passValidation(text);
          }}
        />
        {passEr ? <Text style={styles.error}>{passEr}</Text> : null}
      </View>

      <ButtonComp
        text={'SIGN IN'}
        onPress={() => {
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
          color: '#888888',
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
          onPress={() => props.navigation.navigate('CreateAcc')}>
          <Text style={{...styles.textInputHead, color: '#00B140'}}>
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
    backgroundColor: '#fff',
  },

  image: {
    height: 54,
    width: 54,
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
    color: '#6F6F6F',
  },

  textInputView: {
    marginHorizontal: 51,
    marginTop: 52,
  },

  textInput: {
    height: 42,
    width: 288,
    backgroundColor: '#FAFAFA',
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
