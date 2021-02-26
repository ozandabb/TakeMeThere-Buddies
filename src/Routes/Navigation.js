import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {  View, StyleSheet , Text } from 'react-native';
import CategoryStackNavigator from './CategoryStackNavigator'

class Navigation extends Component {
  
  constructor(props) {
    super(props);
    
  }

    render(){
        return (
          <NavigationContainer>
            <CategoryStackNavigator></CategoryStackNavigator>
          </NavigationContainer>
        );
    }
}



export default Navigation


