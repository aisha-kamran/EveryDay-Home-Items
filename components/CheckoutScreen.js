import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CheckoutScreen = ({ route, navigation }) => {
  const { cart } = route.params;

  if (!cart) {
    return <Text>No items in the cart</Text>;
  }

const handleConfirmOrder = () => {
    // Implement logic to confirm the order, e.g., send the order to the server
    console.log('Order confirmed!');
    // Navigate to the ThankYouScreen
    navigation.navigate('ThankYou');
};


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products in Cart:</Text>
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Product</Text>
          <Text style={styles.tableHeader}>Price</Text>
          <Text style={styles.tableHeader}>Quantity</Text>
          <Text style={styles.tableHeader}>Total Price</Text>
        </View>
        {Object.values(cart).map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableData}>{item.name}</Text>
            <Text style={styles.tableData}>${item.price}</Text>
            <Text style={styles.tableData}>{item.quantity}</Text>
            <Text style={styles.tableData}>${item.price * item.quantity}</Text>
          </View>
        ))}
      </View>
      {/* Confirm Order button */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmOrder}>
        <Text style={styles.confirmButtonText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  tableHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
  },
  tableData: {
    fontSize: 16,
    padding: 5,
  },
  confirmButton: {
    backgroundColor: 'grey',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
