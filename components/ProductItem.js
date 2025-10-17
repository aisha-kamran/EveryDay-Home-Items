import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductItem = ({ product, onPress }) => (
  <View style={styles.container}>
    <Image source={product.image} style={styles.image} />
    <Text style={styles.name}>{product.name}</Text>
    <Text style={styles.price}>{product.price}</Text>
    <TouchableOpacity style={styles.cartButton} onPress={onPress}>
      <Text style={styles.cartButtonText}>Add to Cart</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    
  },
  price: {
    fontSize: 14,
  },
  cartButton: {
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  cartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductItem;
