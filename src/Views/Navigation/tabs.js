// import React from "react";
// import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
// import { StyleSheet , Text} from "react-native";
// import HomeScreen from '../Home';
// import CategoryScreen from '../Categories/Categories';
// import Welcome from '../WelcomeScreen';
// import Adventure from '../Categories/adventure';


//  const Tab = createBottomTabNavigator();

// const BottomNavigator = () => {
//   return (
//     <Tab.Navigator
     
//       tabBarOptions={{
//         activeTintColor : '#2D2D2D' , 
//         labelStyle: { fontSize : 11.5 , marginBottom : 5 , fontFamily : fonts.medium},
//         style : {
//           height : 60,
//           backgroundColor: '#EFEFEF' 
//         },
//       }}
//     >
//     <Tab.Screen name="Home" component={HomeScreen}
      
//       options={{
//         title : "Home",
//         tabBarIcon :  ({ color }) => 
//         <Icon name="home" style={[styles.item_icon]}  size={27} color={color}/> ,
//       }} 
//     />
//     <Tab.Screen name="Menu" component={Welcome}
//       options={{
//         title : "Menu",
//         tabBarIcon :  ({ color }) => 
//         <Icon name="book" style={[styles.item_icon]}  size={23} color={color}/> ,
//       }} 
//     />
//     <Tab.Screen name="Favourite" component={FavouritePage}

//       options={{
//         title : "Favourite",
//         tabBarIcon :  ({ color }) => 
//         <Icon name="heart" style={[styles.item_icon]}  size={23} color={color}/> ,
//       }} 
//     />
    
//     <Tab.Screen name="Track" component={Adventure}
//       options={{
//         title : "Track",
//         tabBarIcon :  ({ color }) => 
//         <Icon name="truck" style={[styles.item_icon]}  size={25} color={color}/> ,
//       }} 
//     />

//     </Tab.Navigator>
//   );
// }

// export default BottomNavigator;


// const styles = StyleSheet.create({
   
//   item_icon : {
//       alignSelf : 'center', 
//       paddingTop : 8 ,
//       borderRadius : 4,
//   },
//   item_text:{
//       fontWeight : '700',
//       fontSize : 14.5 ,
//   },
// });
  









// import React from 'react';
// import {  View } from 'react-native';
// import {  createAppContainer } from 'react-navigation';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';

// import HomeScreen from '../Home';
// import CategoryScreen from '../Categories/Categories';
// import Welcome from '../WelcomeScreen';
// import Adventure from '../Categories/adventure';


// const TabNavigator = createMaterialBottomTabNavigator(
//     { 
    
//         Home: {
//             screen: HomeScreen,
//             navigationOptions: {
//             tabBarLabel: 'Home',
//             tabBarIcon: ({ tintColor }) => (
//                 <View>
//                 <Icon style={[{ color: tintColor }]} size={25} name={'home'} />
//                 </View>
//             ),
//             },
//         },
  
//         Categories: {
//             screen: CategoryScreen,
//             navigationOptions: {
//             tabBarLabel: 'Categories',
//             tabBarIcon: ({ tintColor }) => (
//                 <View>
//                 <Icon
//                     style={[{ color: tintColor }]} size={25} name={'search'} />
//                 </View>
//             ),
//             },
//         },

//         Welcome: {
//             screen: Welcome,
//             navigationOptions: {
//             tabBarLabel: 'Settings',
//             tabBarIcon: ({ tintColor }) => (
//                 <View>
//                 <Icon
//                     style={[{ color: tintColor }]} size={25} name={'settings'} />
//                 </View>
//             ),
//             },
//         },




//     },
  
       
//     {
//       initialRouteName: 'Home',
//       activeColor: '#000000',
//       inactiveColor: '#69726b',
//       barStyle: { backgroundColor: '#FFFFFF' },
//     }
//   );
  
//   export default createAppContainer(TabNavigator);