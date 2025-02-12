import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const TextInputComp = ({text, value, onChangeText, error}) => {
  return (
    <View style={styles.textInputView}>
      <Text style={styles.textInputHead}>{text}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
      />
      {{error} ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  textInputHead: {
    fontSize: 16,
    fontWeight: '400',
    color: '#6F6F6F',
  },

  textInputView: {
    marginHorizontal: 51,
  },

  textInput: {
    height: 42,
    width: 288,
    backgroundColor: '#FAFAFA',
    marginTop: 13,
    borderRadius: 10,
  },

  error: {
    color: 'red',
    fontSize: 12,
  },
});
