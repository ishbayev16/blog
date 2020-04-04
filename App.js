import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer, NavigationContainer  } from '@react-navigation/native';
import IndexScreen from './src/screens/IndexScreen'; 
import {BlogProvider} from './src/context/BlogContext';

const navigator = createStackNavigator();
const App = () => {
  return(
  <NavigationContainer>
    <navigator.Navigator>
      <navigator.Screen name="Blogs" component={IndexScreen} /> 
    </navigator.Navigator>
  </NavigationContainer>
  )
}
  
export default () => {
  return (
  <BlogProvider>
    <App />
  </BlogProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
