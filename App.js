import React, {Component} from 'react';
// import TabNavigator from './src/Views/Navigation/tabs';
import Navigation from './src/Routes/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {  createAppContainer } from 'react-navigation';
import Home from './src/Views/Home';
import Adventure from './src/Views/Categories/adventure';
import Welcome from './src/Views/WelcomeScreen';
import CategoryScreen from './src/Views/Categories/Categories';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    StyleSheet,
    SafeAreaView,
    ScrollView ,
    FlatList,
    View,
    Text,
    Image,
    ImageBackground, 
    TouchableOpacity
} from 'react-native';
const Stack = createStackNavigator();


const App = () => {

    return(
        <Navigation />
        //  <TabNavigator/> 
    )
  
}


const TabNavigator = createMaterialBottomTabNavigator(
    { 
    
        Home: {
            screen: Home,
            navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <View>
                <Icon style={[{ color: tintColor }]} size={25} name={'home'} />
                </View>
            ),
            },
        },
  
        Categories: {
            screen: CategoryScreen,
            navigationOptions: {
            tabBarLabel: 'Categories',
            tabBarIcon: ({ tintColor }) => (
                <View>
                <Icon
                    style={[{ color: tintColor }]} size={25} name={'search'} />
                </View>
            ),
            },
        },
  
        Welcome: {
            screen: Welcome,
            navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({ tintColor }) => (
                <View>
                <Icon
                    style={[{ color: tintColor }]} size={25} name={'settings'} />
                </View>
            ),
            },
        },
  
  
  
  
    },
  
       
    {
      initialRouteName: 'Home',
      activeColor: '#000000',
      inactiveColor: '#69726b',
      barStyle: { backgroundColor: '#FFFFFF' },
    }
  );


  export default createAppContainer(TabNavigator);
