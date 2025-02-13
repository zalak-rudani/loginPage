import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const TextInputComp = ({
  text,
  value,
  error,
  source,
  onPress,
  multiline,
  placeholder,
  onChangeText,
  onSubmitEditing,
  onPressIn,
  onPressOut,
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
          onPressOut={onPressOut}
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
    color: '#6F6F6F',
  },

  textInputView: {
    marginHorizontal: 51,
  },

  image: {
    height: 15,
    width: 15,
  },
  textInput: {
    height: 42,
    width: 288,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    marginTop: 13,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
  },

  error: {
    color: 'red',
    fontSize: 12,
  },
});
