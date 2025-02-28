import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {hp} from '../helper/GlobalFunc';

import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.Reducer);
  console.log('cartData', cartData);

  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData?.length);
  }, [cartData]);

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{cartItems}</Text>
      <Button
        title="*************"
        onPress={() => console.log('/*-/-/-/-*/-/-*/-', cartItems)}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  view: {
    // flex: 1,
    //   backgroundColor: '#000',
  },
  text: {
    fontSize: 40,
    // color: 'yellow',
    textAlign: 'center',
    marginTop: 40,
    backgroundColor: 'lightyellow',
  },
});
