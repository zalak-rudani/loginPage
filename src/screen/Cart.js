import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './Header';
import Products from './Products';
import {useSelector} from 'react-redux';

const Cart = () => {
  // const cartData = useSelector(state => {
  //   console.log('state', state.Reducer);
  //   return state.Reducer;
  // });
  // console.log('cartData', cartData);
  const products = [
    {
      id: 1,
      name: 'phone',
      color: 'blue',
      qty: 6,
    },
    {
      id: 2,
      name: 'Pc',
      color: 'black',
      qty: 3,
    },
    {
      id: 3,
      name: 'Remote',
      color: 'gray',
      qty: 5,
    },
  ];
  return (
    <View style={styles.main}>
      <Header />
      {products.map(item => (
        <Products item={item} />
      ))}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
