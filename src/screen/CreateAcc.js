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

import {colors, hp, strings} from '../helper/GlobalFunc';
import AppComp from '../components/AppComp';
import ButtonComp from '../components/ButtonComp';
import TextInputComp from '../components/TextInputComp';
import ConstantImages from '../helper/constants/ConstantImages';

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
    if (name === '') {
      setNameEr('Name must be entered');
    } else if (name.length > 0) {
      setNameEr('');
    }
  };

  const confirmPassValidation = () => {
    if (confirmPass === '') {
      setConfirmPassEr('Confirm password must be entered');
    } else if (confirmPass !== pass) {
      setConfirmPassEr('Passwords do NOT match');
    } else if (confirmPass === pass) {
      setConfirmPassEr('');
    }
  };

  const passValidation = () => {
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{7,}$/;

    if (pass === '') {
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

    if (email === '') {
      setEmailEr('Email address must be entered');
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

      <Text style={styles.text}>{strings.createAcc.create}</Text>
      <View style={{marginTop: 30}}>
        <TextInputComp
          text={'Name'}
          value={name}
          onChangeText={text => {
            setName(text);
          }}
          onSubmitEditing={() => NameValidation()}
          onBlur={() => NameValidation()}
          // onFocus={() => NameValidation()}
          error={nameEr}
        />
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

          // multiline={true}
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
          onBlur={() => confirmPassValidation()}
          // onFocus={() => confirmPassValidation()}
          error={confirmPassEr}
        />
      </View>

      <View style={styles.checkBoxView}>
        <TouchableOpacity onPress={() => setCheckBox(!checkBox)}>
          <Image
            source={
              checkBox ? ConstantImages.checkBox : ConstantImages.blankCheckBox
            }
            style={{height: hp(13), width: hp(13)}}
          />
        </TouchableOpacity>

        <Text style={styles.termText}>{strings.createAcc.understood}</Text>
        <Text style={{...styles.termText, color: colors.lightGreen}}>
          {' '}
          {strings.createAcc.term}
        </Text>
      </View>
      <ButtonComp
        text={'SIGN UP'}
        customStyle={{backgroundColor: colors.lightGreen}}
        onPress={() => {
          if (
            email === '' ||
            name === '' ||
            confirmPass === '' ||
            pass === ''
          ) {
            if (email === '') {
              setEmailEr('Email must be entered');
            }
            if (name === '') {
              setNameEr('Name must be entered');
            }
            if (confirmPass === '') {
              setConfirmPassEr('Confirm Password must be entered');
            }
            if (pass === '') {
              setPassEr('Password must be entered');
            }
          } else if (emailEr || nameEr || confirmPassEr || passEr) {
            NameValidation();
            passValidation();
            confirmPassValidation();
            emailValidation();
          } else if (checkBox === false) {
            Alert.alert('You must agree term & condition');
          } else {
            props.navigation.navigate('test');
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

      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 43}}>
        <Text style={styles.textInputHead}>{strings.createAcc.haveAcc}</Text>
        <Text style={{...styles.textInputHead, color: colors.lightGreen}}>
          {' '}
          {strings.button.signIn}
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
  checkBoxView: {
    flexDirection: 'row',
    marginLeft: 53,
    marginBottom: 30,
  },
});
