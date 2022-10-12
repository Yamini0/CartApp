import React, {useCallback, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';

import {removeFromCart, emptyCart} from '../../redux/actions';

import {ProductCard} from '../../Components/ProductCard';

export const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const cartProduct = useSelector(state => state.cartProduct);

  console.log('cartProduct', cartProduct);

  const handleRemoveFromCart = useCallback(id => {
    dispatch(removeFromCart(id));
  }, []);

  const renderItem = useCallback(({item, index}) => {
    return (
      <ProductCard
        item={item}
        btnAction={id => handleRemoveFromCart(id)}
        index={index}
        showRemoveBtn
      />
    );
  }, []);

  return (
    <SafeAreaView style={styles.wrapper} edges={['top']}>
      <View style={styles.titleContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.cartIcon}>
          <Entypo name="back" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>CART</Text>
      </View>
      <FlatList
        data={cartProduct}
        style={styles.listContainer}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#000',
    fontWeight: '800',
    marginStart: 16,
  },
  listContainer: {
    marginBottom: 16,
  },
  seperator: {
    width: 8,
    height: 16,
  },
  cartIcon: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#DCDCDC',
  },
  titleContainer: {
    flexDirection: 'row',
    margin: 16,
    alignItems: 'center',
  },
});
