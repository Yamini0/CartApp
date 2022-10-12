import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {deviceWidth} from '../utils';

export const ProductCard = ({
  item,
  index,
  btnAction,
  showAddBtn,
  showRemoveBtn,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: item?.image}}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.heading}>{item?.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item?.description}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>INR {item?.price}</Text>
          {showAddBtn && (
            <TouchableOpacity
              style={styles.addtocartContainer}
              onPress={() => btnAction(item)}>
              <Text style={styles.addtocartText}>Add To Card</Text>
            </TouchableOpacity>
          )}
          {showRemoveBtn && (
            <TouchableOpacity
              style={styles.removefromContainer}
              onPress={() => btnAction(item.id)}>
              <Text style={styles.addtocartText}>Remove</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 8,
    marginHorizontal: 8,
    width: deviceWidth - 16,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#C7C7C7',
    borderRadius: 12,
  },
  imageContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  rightContainer: {
    flex: 1,
    paddingHorizontal: 8,
  },
  heading: {
    fontWeight: 'bold',
    color: '#000A',
    fontSize: 14,
    lineHeight: 18,
  },
  description: {
    color: '#000A',
    fontSize: 10,
    lineHeight: 12,
    marginTop: 2,
  },
  price: {
    color: '#000',
    fontSize: 14,
    lineHeight: 18,
    marginTop: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addtocartContainer: {
    marginVertical: 8,
    width: 100,
    height: 30,
    backgroundColor: '#36A73B',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addtocartText: {
    color: 'white',
  },
  removefromContainer: {
    marginVertical: 8,
    width: 100,
    height: 30,
    backgroundColor: '#DC0F28',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
