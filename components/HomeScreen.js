import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import ProductItem from './ProductItem';
import { FontAwesome } from '@expo/vector-icons';
const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState({});
  const [totalQuantity, setTotalQuantity] = useState(0);

  const products = [
    { id: '1', name: 'Bowl Set', price: 100, image: require('../assets/IMG-20221005-WA0083 - Copy.jpg') },
    { id: '2', name: 'Dispencer', price: 200, image: require('../assets/dispencer 2.jpg') },
    { id: '3', name: 'Dustbin', price: 150, image: require('../assets/20 y.jpg') },
    { id: '4', name: 'Wood Plate', price: 180, image: require('../assets/wood plate 1.jpg') },
    { id: '5', name: 'Cutlery', price: 1000, image: require('../assets/cutlery 4.jpg') },
    { id: '6', name: 'Stool', price: 500, image: require('../assets/milat stol blue - Copy - Copy - Copy.jpg') },
  ];

  const addToCart = (product) => {
    const updatedCart = { ...cart };
    if (updatedCart[product.id]) {
      updatedCart[product.id].quantity += 1;
    } else {
      updatedCart[product.id] = { ...product, quantity: 1 };
    }
    setCart(updatedCart);
  };

  const calculateTotalQuantity = () => {
    let total = 0;
    for (const productId in cart) {
      total += cart[productId].quantity;
    }
    setTotalQuantity(total);
  };

  useEffect(() => {
    calculateTotalQuantity();
  }, [cart]);

// 🧭 Add Cart Icon in Header

  useEffect(() => {

    navigation.setOptions({

      headerRight: () => (

        <TouchableOpacity

          style={{ marginRight: 15 }}

          onPress={() => navigation.navigate('AddToCart', { cart })}

        >

          <View style={{ position: 'relative' }}>

            <FontAwesome name="shopping-cart" size={24} color="white" />

            {totalQuantity > 0 && (

              <View style={styles.badge}>

                <Text style={styles.badgeText}>{totalQuantity}</Text>

              </View>

            )}

          </View>

        </TouchableOpacity>

      ),

    });

  }, [navigation, totalQuantity, cart]);

  return (
    <ImageBackground 
      source={require('../assets/backgroundImage.jpg')}
      style={styles.container}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <FlatList
            data={products}
            numColumns={2}
            renderItem={({ item }) => (
              <ProductItem
                product={item}
                onPress={() => addToCart(item)} 
              />
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.productList}
            columnWrapperStyle={styles.columnWrapper}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('AddToCart', { cart: cart })}>
          <FontAwesome name="shopping-cart" size={22} color="white" />
          <Text style={styles.cartButtonText}>Cart ({totalQuantity})</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 100,
  },
  productList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-around',
  },
  cartButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    paddingVertical: 12,
    backgroundColor: 'grey',
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  cartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,

  },

  badge: {
    position: 'absolute',
    right: -8,
    top: -4,
    backgroundColor: 'red',
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',

  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
