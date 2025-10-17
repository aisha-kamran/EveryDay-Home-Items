import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import AddToCartScreen from './components/AddToCartScreen';
import CheckoutScreen from './components/CheckoutScreen';
import ThankYouScreen from './components/ThankYouScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
        <ImageBackground 
          source={require('./assets/backgroundImage.jpg')} 
          style={styles.backgroundImage}
        >
    <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#FF6347', 
              },
              headerTintColor: '#FFFFFF', 
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }} />
            <Stack.Screen name="AddToCart" component={AddToCartScreen} options={{ title: 'Add to Cart' }} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Checkout' }} />
            <Stack.Screen name="ThankYou" component={ThankYouScreen} options={{ title: 'Thank You' }} />
          </Stack.Navigator>
    </NavigationContainer>
      </ImageBackground>
      </View>
  );
};

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.welcomeContainer}>
      <Image source={require('./assets/logo.jpg')} style={styles.image} /> 
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>WWelcome to Everyday Home Items!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF6347', // Coral color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF', // White text
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default App;
