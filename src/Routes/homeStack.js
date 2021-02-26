import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';

import Home from "../Views/Home";
import Adventure from '../Views/Categories/adventure';

const screens = {
    Home: {
        screen: Home
    },
    Adventure: {
        screen: Adventure
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);