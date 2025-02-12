import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  CheckBox,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ConstantImages from './constants/ConstantImages';
import ButtonComp from '../components/ButtonComp';
import AppComp from '../components/AppComp';
import TextInputComp from '../components/TextInputComp';

const CreateAcc = props => {
  const [email, setEmail] = useState('');
  const [emailEr, setEmailEr] = useState('');
  const [pass, setPass] = useState('');
  const [passEr, setPassEr] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [confirmPassEr, setConfirmPassEr] = useState('');
  const [name, setName] = useState('');
  const [nameEr, setNameEr] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const NameValidation = val => {
    if (val.length === 0) {
      setNameEr('Name must be enter');
    }
  };

  const confirmPassValidation = val => {
    if (val.length === 0) {
      setConfirmPassEr('Confirm password must be enter');
    } else if (val !== pass) {
      setConfirmPassEr('Passwords do NOT match');
    } else if (val === pass) {
      setConfirmPassEr('');
    }
  };

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
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            source={ConstantImages.back}
            style={{...styles.image, height: 10, width: 17}}
          />
        </TouchableOpacity>
        <Image source={ConstantImages.logo} style={styles.image} />
      </View>

      <Text style={styles.text}>Create your account</Text>
      <View style={{marginTop: 30}}>
        <TextInputComp
          text={'Name'}
          value={name}
          onChangeText={text => {
            setName(text);
            NameValidation(text);
          }}
          error={nameEr}
        />
        <TextInputComp
          text={'Email'}
          value={email}
          onChangeText={text => {
            setEmail(text);
            emailValidation(text);
          }}
          error={emailEr}
        />
        <TextInputComp
          text={'Password'}
          value={pass}
          onChangeText={text => {
            setPass(text);
            passValidation(text);
          }}
          error={passEr}
        />

        <TextInputComp
          text={'Confirm Password'}
          value={confirmPass}
          onChangeText={text => {
            setConfirmPass(text);
            confirmPassValidation(text);
          }}
          error={confirmPassEr}
        />
      </View>

      <View style={{flexDirection: 'row', marginLeft: 53, marginBottom: 30}}>
        <TouchableOpacity style={styles.box} />

        <Text style={styles.termText}> I understood the</Text>
        <Text style={{...styles.termText, color: '#00B140'}}>
          {' '}
          terms & policy.
        </Text>
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
        <Text style={{...styles.textInputHead, color: '#00B140'}}>
          {' '}
          SIGN UP
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CreateAcc;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },

  image: {
    height: 25,
    width: 25,
  },

  imageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 50,
    marginBottom: 40,
    marginTop: 20,
  },

  text: {
    fontSize: 27,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
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

  termText: {
    fontSize: 12,
    fontWeight: 400,
  },

  box: {
    borderWidth: 1,
    height: 13,
    width: 13,
    borderColor: '#00B140',
  },
});
