import React, {Component} from 'react';
import Home from './src/Views/Home';
import Categories from './src/Views/Categories/Categories';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

// extra screens
import Tabs from "./src/Views/Navigation/tabs";
import { icons, COLORS, SIZES } from './src/Asserts/Constants';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent",
  },
};

export default class App extends Component{
  render(){

    // createHomeStack = () =>
    // <Stack.Navigator>
    //   <Stack.Screen 
    //   name="Home" 
    //   component={Home}
    //   options = {{headerShown: false}} />
    // </Stack.Navigator>

    return(
      <NavigationContainer theme={theme}>
            <Stack.Navigator
                initialRouteName={'Home'}
            >
                 {/* Home screen start here */}
              <Stack.Screen 
                name="Home" 
                component={Home}
                options = {{headerShown: false}} />
               
                {/* Tabs */}
                < Stack.Screen
                    name="Tabs"
                    component={Tabs}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: COLORS.white
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                style={{ marginRight: SIZES.padding }}
                                onPress={() => console.log("Menu")}
                            >
                                <Image
                                    source={icons.menu}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                    }}
                />


            </Stack.Navigator>
        </NavigationContainer >
    )
  }
}