import React, {useState} from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {colors, fontSize, hp} from '../helper/GlobalFunc';
import AppComp from '../components/AppComp';
import ButtonComp from '../components/ButtonComp';
import ConstantImages from './constants/ConstantImages';
import TextInputComp from '../components/TextInputComp';

const CreateAcc = props => {
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameEr, setNameEr] = useState('');
  const [passEr, setPassEr] = useState('');
  const [emailEr, setEmailEr] = useState('');
  const [checkBox, setCheckBox] = useState(false);
  const [confirmPass, setConfirmPass] = useState('');
  const [confirmPassEr, setConfirmPassEr] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const NameValidation = () => {
    if (name.length === 0) {
      setNameEr('Name must be enter');
    } else if (name.length > 0) {
      setNameEr('');
    }
  };

  const confirmPassValidation = () => {
    if (confirmPass.length === 0) {
      setConfirmPassEr('Confirm password must be enter');
    } else if (confirmPass !== pass) {
      setConfirmPassEr('Passwords do NOT match');
    } else if (confirmPass === pass) {
      setConfirmPassEr('');
    }
  };

  const passValidation = () => {
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{7,}$/;

    if (pass.length === 0) {
      setPassEr('password must be enter');
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
      <View style={styles.imageView}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            source={ConstantImages.back}
            style={[styles.image, {height: 10, width: 17}]}
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
          }}
          onSubmitEditing={() => NameValidation()}
          onPressIn={() => setNameEr('')}
          error={nameEr}
        />
        <TextInputComp
          text={'Email'}
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
          onPressIn={() => setEmailEr('')}
          error={emailEr}
          onSubmitEditing={() => emailValidation()}
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
          onSubmitEditing={() => passValidation()}
          onPressIn={() => setPassEr('')}
          error={passEr}
        />

        <TextInputComp
          text={'Confirm Password'}
          value={confirmPass}
          source={
            confirmPasswordVisible ? ConstantImages.hide : ConstantImages.view
          }
          secureTextEntry={!confirmPasswordVisible}
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          onChangeText={text => {
            setConfirmPass(text);
          }}
          onSubmitEditing={() => confirmPassValidation()}
          onPressIn={() => setConfirmPassEr('')}
          error={confirmPassEr}
        />
      </View>

      <View style={{flexDirection: 'row', marginLeft: 53, marginBottom: 30}}>
        <TouchableOpacity onPress={() => setCheckBox(!checkBox)}>
          <Image
            source={
              checkBox ? ConstantImages.checkBox : ConstantImages.blankCheckBox
            }
            style={{height: hp(13), width: hp(13)}}
          />
        </TouchableOpacity>

        <Text style={styles.termText}> I understood the</Text>
        <Text style={{...styles.termText, color: colors.lightGreen}}>
          {' '}
          terms & policy.
        </Text>
      </View>
      <ButtonComp
        text={'SIGN UP'}
        onPress={() => {
          NameValidation();
          passValidation();
          confirmPassValidation();
          emailValidation();

          if (checkBox === false) {
            Alert.alert('You must agree term & condition');
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
        <Text style={styles.textInputHead}>Have an account?</Text>
        <Text style={{...styles.textInputHead, color: colors.lightGreen}}>
          {' '}
          SIGN IN
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CreateAcc;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
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
    // fontSize: fontSize.font27,
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
    color: colors.darkGray,
  },

  termText: {
    fontSize: 12,
    fontWeight: 400,
  },

  box: {
    borderWidth: 1,
    height: 13,
    width: 13,
    borderColor: colors.lightGreen,
  },
});
