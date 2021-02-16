import React, {Component} from 'react';
import Home from './src/Views/Home';
import Categories from './src/Views/Categories/Categories';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component{
  render(){

    createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={Home}
      options = {{headerShown: false}} />
    </Stack.Navigator>

    return(
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children = {createHomeStack} />
          <Drawer.Screen name="Categories" component={Categories} />
        </Drawer.Navigator>
      </NavigationContainer>
      // <Home/>
    )
  }
}

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
