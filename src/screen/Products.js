import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {addToCart, removeFromCart} from '../redux/Action';

const Products = props => {
  const item = props.item;
  const dispatch = useDispatch();

  const cartData = useSelector(state => state.Reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = item => {
    console.log('------------', item);
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = item => {
    console.log('--======----', item);
    dispatch(removeFromCart(item.id));
  };

  useEffect(() => {
    let result = cartData.filter(element => {
      return element.name === item.name;
    });

    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartData]);

  return (
    <View>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.color}</Text>
      <Text style={styles.text}>{item.qty}</Text>

      {isAdded ? (
        <Button
          title="REMOVE TO CART"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="ADD TO CART" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
