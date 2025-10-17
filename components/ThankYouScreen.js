import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ThankYouScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thank you for your order!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ThankYouScreen;
