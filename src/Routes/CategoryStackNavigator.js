import React from "react";
import { createStackNavigator , CardStyleInterpolators } from '@react-navigation/stack';

import Home from '../Views/Home';
import Adventure from '../Views/Categories/adventure';
import Ancient from '../Views/Categories/ancient';
import BottomTabNavigator from '../Views/Navigation/tabs';

const Stack = createStackNavigator();


const CategoryStackNavigator = () => {
    return (
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="Adventure" component={Adventure} />
            {/* <Stack.Screen name="bottommTab" component={BottomTabNavigator}/> */}
            {/* <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
    );

}

export default CategoryStackNavigator;