import React, { Component } from 'react';
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
import HomeBackImage from '../Asserts/home_banner.jpg';
import {Feather} from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import {  createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import { Waterfall } from "../Asserts/Images/waterfalls.jpg";

import CategoryScreen from '../Views/Categories/Categories';
import Welcome from '../Views/WelcomeScreen';
import Adventure from '../Views/Categories/adventure';

import { images, COLORS, FONTS, SIZES, icons } from '../Asserts/Constants';

const OptionItem = ({ bgColor, icon, label, onPress }) => {
  return (
      <TouchableOpacity
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          onPress={onPress}
      >
          <View style={[styles.shadow, { width: 60, height: 60 }]}>
              <LinearGradient
                  style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: 'red' }]}
                  colors={bgColor}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
              >
                  <Image
                      source={icon}
                      resizeMode="cover"
                      style={{
                          tintColor: COLORS.white,
                          width: 30,
                          height: 30,
                      }}
                  />
              </LinearGradient>
          </View>
          <Text style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{label}</Text>
      </TouchableOpacity>
  )
}

const Home = ({ navigation }) => {

   //Categories
   const [destinations, setDestinations] = React.useState([
    {
        id: 0,
        name: "Waterfalls",
        img: images.Waterfall,
    },
    {
        id: 1,
        name: "Camping",
        img: images.camping,
    },
    {
        id: 2,
        name: "Hiking",
        img: images.hiking,
    },
    {
        id: 3,
        name: "Mountain",
        img: images.climbing,
    },
  //   {
  //     id: 4,
  //     name: "Frozen Hills",
  //     img: images.hiking,
  // },
  // {
  //     id: 5,
  //     name: "Beach",
  //     img: images.Waterfall,
  // },
]);

function renderDestinations(item, index) {
  var destinationStyle = {};

  if (index == 0) {
      destinationStyle = { marginLeft: SIZES.padding, }
  }

  return (
      <TouchableOpacity
          style={{ justifyContent: 'center', marginHorizontal: SIZES.base, ...destinationStyle }}
          onPress={() => { navigation.navigate("Categories") }}>
          <Image
              source={item.img}
              resizeMode="cover"
              style={{
                  width: SIZES.width * 0.28,
                  height: 200,
                  borderRadius: 15
              }}/>
          <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>{item.name}</Text>
      </TouchableOpacity>
  )
}
    return (
        <View style={styles.container}>
          <ScrollView
           showsVerticalScrollIndicator={false}
           style={{
               height:"100%",
           }}>

          {/*=========================================== Header section start here ==================================================*/}
          <View>
            <ImageBackground
            source={HomeBackImage}
            style={{width:'100%', height: 220 }}
            imageStyle = {{borderBottomRightRadius:65}}>
              <View style={styles.DarkOverlay}></View>
              {/* Header text */}
              <View style={styles.textSection}>
                <Text style={styles.textStyle}>Find your dream place</Text>
                <Text style={styles.textdesc}>Start dreaming and plan your Bucket List</Text>
              </View>
            </ImageBackground>
          </View>
          {/*=========================================== Header section ends here ===================================================*/}


          {/*=========================================== Title tab section starts here ===================================================*/}
            <View style={{ justifyContent:'center', marginTop:20}}>
              <View style={{flexDirection:'row', paddingHorizontal:SIZES.base}}>
                <OptionItem
                    icon={icons.eat}
                    bgColor={['#7cf1fb', '#4ebefd']}
                    label="Eats"
                    onPress={() => navigation.navigate("Welcome") }
                />
                <OptionItem
                  icon={icons.bed}
                  bgColor={['#fddf90', '#fcda13']}
                  label="Hotels"
                  onPress={() => { console.log("Hotels") }}
                />
                <OptionItem
                    icon={icons.event}
                    bgColor={['#fca397', '#fc7b6c']}
                    label="Event"
                    onPress={() => { console.log("Event") }}
                />
                <OptionItem
                    icon={icons.compass}
                    bgColor={['#7be993', '#46caaf']}
                    label="Adventure"
                    onPress={() => { console.log("Adventure") }}
                />
                 <OptionItem
                    icon={icons.eat}
                    bgColor={['#7cf1fb', '#4ebefd']}
                    label="Eats"
                    onPress={() => { console.log("Eats") }}
                />
              </View>
              {/* <View style={{ flexDirection: 'row', marginTop: 100, paddingHorizontal: SIZES.base }}>
                <OptionItem
                    icon={icons.bed}
                    bgColor={['#ffc465', '#ff9c5f']}
                    label="Hotel"
                    onPress={() => { console.log("Hotel") }}
                />
                <OptionItem
                    icon={icons.eat}
                    bgColor={['#7cf1fb', '#4ebefd']}
                    label="Eats"
                    onPress={() => { console.log("Eats") }}
                />
                <OptionItem
                    icon={icons.compass}
                    bgColor={['#7be993', '#46caaf']}
                    label="Adventure"
                    onPress={() => { console.log("Adventure") }}
                />
                <OptionItem
                    icon={icons.event}
                    bgColor={['#fca397', '#fc7b6c']}
                    label="Event"
                    onPress={() => { console.log("Event") }}
                />
            </View> */}
            </View>
          {/*=========================================== Title tab section Ends here ===================================================*/}


          {/*=========================================== Categories section starts here ===================================================*/}
          <View style={{ flex: 1, marginTop:20 }}>
            <Text style={{fontSize:15, marginLeft:20,  color:'#69726b'}}>R e c o m m e n d e d</Text>
            <Text style={{fontSize:18, color:'#000', marginLeft:20}}>Travel Places By Categories</Text>
            <FlatList
              style={{marginTop:20}}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={destinations}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => renderDestinations(item, index)}
            />
          </View>
          {/*=========================================== Categories section Ends here ===================================================*/}


          {/*=========================================== Categories section starts here ===================================================*/}





          </ScrollView>
        </View>
    );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  DarkOverlay:{
    position:'absolute',
    top:0,
    right:0,
    left:0,
    height:220,
    backgroundColor:'#000',
    opacity:0.3,
    borderBottomRightRadius:65
  },
  textStyle:{
    fontSize:20,
    color:'#fff',
    fontWeight:'bold'
  },
  textdesc:{
    color:'#fff',
  },
  textSection:{
    left:20,
    top:100,
  },
  goExploreSec:{
    left:-20,
    top:40,
    backgroundColor:'#fff',
    height:60,
    width:200,
    borderTopRightRadius:40,
    borderBottomRightRadius:40,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  box:{
    width:'50%'
  },
  inner:{
    flex:1
  },
  goExploreText:{
    fontWeight:'bold',
    // color:'#000',
    fontSize:17,
    left:20,
    top:18,

  },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
 

});


export default Home;
