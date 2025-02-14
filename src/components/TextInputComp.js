import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors, hp, wp} from '../helper/GlobalFunc';

const TextInputComp = ({
  text,
  value,
  error,
  source,
  onFocus,
  onPress,
  onBlur,
  onPressIn,
  multiline,
  placeholder,
  keyboardType,
  onChangeText,
  onSubmitEditing,
  secureTextEntry,
}) => {
  return (
    <View style={styles.textInputView}>
      <Text style={styles.textInputHead}>{text}</Text>
      <View style={styles.textInput}>
        <TextInput
          style={{flex: 1}}
          multiline={multiline}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          onSubmitEditing={onSubmitEditing}
          onPressIn={onPressIn}
          keyboardType={keyboardType}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <TouchableOpacity onPress={onPress}>
          <Image source={source} style={styles.image} />
        </TouchableOpacity>
      </View>
      {{error} ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  textInputHead: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.lightGray,
  },

  textInputView: {
    marginHorizontal: wp(51),
  },

  image: {
    height: hp(15),
    width: hp(15),
  },
  textInput: {
    height: hp(42),
    width: wp(288),
    padding: 10,
    marginTop: hp(13),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.offWhite,
  },

  error: {
    color: 'red',
    fontSize: 12,
  },
});
