import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for the back arrow icon

const AddToCartScreen = ({ route, navigation }) => {
  const { cart } = route.params; // Receive the cart data from the HomeScreen
  const [quantities, setQuantities] = useState({}); // State to manage quantities of each product

  // Initialize quantities from the cart data
  useState(() => {
    let initialQuantities = {};
    for (let key in cart) {
      initialQuantities[key] = cart[key].quantity;
    }
    setQuantities(initialQuantities);
  }, []);

  const handleIncrement = (productId) => {
    setQuantities({ ...quantities, [productId]: quantities[productId] + 1 });
  };

  const handleDecrement = (productId) => {
    if (quantities[productId] > 1) {
      setQuantities({ ...quantities, [productId]: quantities[productId] - 1 });
    }
  };

  const getTotalPrice = (productId) => {
    const product = cart[productId];
    return product.price * quantities[productId];
  };

  const handleCheckout = () => {
    navigation.navigate('Checkout', { cart: cart });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products in Cart:</Text>
      <View style={styles.columnContainer}>
        <Text style={[styles.columnText, styles.nameColumn]}>Product</Text>
        <Text style={[styles.columnText, styles.quantityColumn]}>Quantity</Text>
        <Text style={[styles.columnText, styles.priceColumn]}>  Price</Text>
        <Text style={[styles.columnText, styles.totalPriceColumn]}>Total Price</Text>
      </View>
      {Object.values(cart).map((item, index) => (
        <View key={index} style={styles.productContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={() => handleDecrement(item.id)}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantities[item.id]}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={() => handleIncrement(item.id)}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.priceText}>${item.price}</Text>
          <Text style={styles.totalPriceText}>${getTotalPrice(item.id)}</Text>
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="arrow-left" size={24} color="black" />
          <Text style={styles.buttonText}>Add More Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Add equal distance between columns
    marginBottom: 20,
  },
  columnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nameColumn: {
    flex: 3,
  },
  quantityColumn: {
    flex: 2,
  },
  priceColumn: {
    flex: 2,
  },
  totalPriceColumn: {
    flex: 3,
    textAlign: 'right',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  nameText: {
    flex: 3,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 2,
  },
  quantityButton: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 5,
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
  },
  priceText: {
    flex: 2,
    textAlign: 'center',
    fontSize: 16,
  },
  totalPriceText: {
    flex: 3,
    textAlign: 'right',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  checkoutButton: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddToCartScreen;
