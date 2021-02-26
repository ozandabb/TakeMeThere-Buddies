import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import Jungle from '../../Asserts/Images/jungle.jpg';
import waterfalls from "../../Asserts/Images/waterfalls.jpg";
import beach from "../../Asserts/Images/beach.jpg";
import camping from "../../Asserts/Images/camping.jpg";
import temple from '../../Asserts/Images/temple.jpg';
import hiking from '../../Asserts/Images/hiking.jpg';
import jungles from '../../Asserts/Images/jungles.jpg';
import dam from '../../Asserts/Images/dam.jpg';
import ancient from '../../Asserts/Images/ancient.jpg'
import kovil from '../../Asserts/Images/kovil.jpg';
import rivers from '../../Asserts/Images/rivers.jpg';
import cave from '../../Asserts/Images/cave.jpg';
import parks from '../../Asserts/Images/parks.jpg';
import gardens from '../../Asserts/Images/gardens.jpg'
import adventure from '../../Asserts/Images/adventure.jpg';

import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';

import { Home } from "../Home";
import Adventure from '../Categories/adventure';

class Categories extends Component{

  static navigationOptions = {
    Title:'Home',
  }

  render(){

    const {navigate} = this.props.navigation;

    return(
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
              height:"100%",
          }}>

          {/*=========================================== Header section start here ==================================================*/}
          <View style={{
            height:190,
            width:"100%",
            }}>
            <ImageBackground
            source={Jungle}
            style={{width:'100%', height: '100%' }}
            imageStyle = {{position:'absolute'}}>
            
            {/* Back button  */}
            <View style={{
                flexDirection:"row",
                width:"100%",
                paddingTop:40,
                alignItems:"center",
                paddingHorizontal:35
                }}>
                <View style={{
                    width:"50%"
                }}>
                    <AntDesign name="leftcircleo" color="#FFF" size={24} 
                    onPress={() => navigate('Home')} />
                </View>
                <View style={{
                    width:"50%",
                    alignItems:"flex-end",
                }}>
                </View>
            </View>

            {/* Text  */}
            <Text style={{
              fontFamily:"Bold",
              fontSize:25,
              color:"#FFF",
              paddingVertical:25,
              paddingHorizontal:35
              }}
              >Find Best Category
            </Text>
          

            {/* Search */}
            {/* <View style={{
                flexDirection:"row",
                backgroundColor:"#FFFFFF",
                borderColor:"#FFFFFF",
                borderRadius:20,
                borderWidth:0.2,
                paddingVertical:5,
                marginLeft:30,
                marginRight:30,
                alignItems:"center",
                paddingHorizontal:35

                }}>
                <TextInput
                    placeholder="Search best places"
                    style={{
                        paddingHorizontal:20,
                        fontFamily:"Medium",
                        fontSize:14,
                        width:"90%",
                        color:"#9ca1a2"
                    }}
                />
                <Icon name="search"
                      size={15}
                      color="#9ca1a2"/>
            </View> */}
            </ImageBackground>
          </View>
          {/*=========================================== Header section ends here ==================================================*/}




          {/*=========================================== Category section start here ==================================================*/}
          <View style={{
            backgroundColor:"#FFF",
            borderTopLeftRadius:40,
            borderTopRightRadius:40,
            height:'100%',
            marginBottom:60,
            marginTop:-35,
            paddingHorizontal:15
          }}>

          {/* Watefalls and beaches */}
          <View style={{flexDirection: 'row', top:20}}>

            {/* Waterfalls */}
            <View  style={{width: '50%', borderTopLeftRadius:40}} >
            <TouchableOpacity onPress={() => { console.log("Waterfalls") }}>
            <ImageBackground
              source={waterfalls}
              style={{width:'100%', height:120  }}
              imageStyle = {{borderTopLeftRadius:40}}>
              <View  style={{ alignItems:'center', padding:45}}>
                <Text  style={{color:"#FFFFFF",  fontSize:20}}>Waterfalls</Text>
              </View>
              </ImageBackground>
              </TouchableOpacity>
            </View>

            {/* Beach */}
            <View style={{width: '50%', borderTopRightRadius:40}} >
            <TouchableOpacity>
            <ImageBackground
              source={beach}
              style={{width:'100%' , height:120}}
              imageStyle = {{ borderTopRightRadius:40}}>
              <View style={{ alignItems:'center', padding:45}}>
                <Text style={{color:"#FFFFFF", fontSize:20}}>Beach</Text>
              </View>
              </ImageBackground>
              </TouchableOpacity>
            </View>
            
          </View>

          {/* Campings and Hiking */}
          <View style={{flexDirection: 'row', top:20}}>

            {/* Camping */}
            <View style={{width: '50%'}} >
            <TouchableOpacity>
            <ImageBackground
              source={camping}
              style={{width:'100%', height:120 }}
              // imageStyle = {{borderTopLeftRadius:40, borderBottomLeftRadius:40}}
              >
              <View style={{ alignItems:'center', padding:45}}>
                <Text style={{color:"#FFFFFF", fontSize:20}}>Camping</Text>
              </View>
              </ImageBackground>
              </TouchableOpacity>
            </View>

            {/* Hiking */}
            <View style={{width: '50%'}} >
            <TouchableOpacity>
            <ImageBackground
              source={hiking}
              style={{width:'100%', height:120 }}
              imageStyle = {{}}>
              <View style={{ alignItems:'center', padding:45}}>
                <Text style={{color:"#FFFFFF", fontSize:20}}>Hiking</Text>
              </View>
              </ImageBackground>
              </TouchableOpacity>
            </View>
            
          </View>

          {/* Jungles and Temples */}
          <View style={{flexDirection: 'row', top:20}}>

            {/* Jungles */}
            <View style={{width: '50%', borderTopLeftRadius:40, borderBottomLeftRadius:40}} >
            <TouchableOpacity>
            <ImageBackground
              source={jungles}
              style={{width:'100%', height:120 }}
              // imageStyle = {{borderTopLeftRadius:40, borderBottomLeftRadius:40}}
              >
              <View style={{ alignItems:'center', padding:45}}>
                <Text style={{color:"#FFFFFF", fontSize:20}}>Forests</Text>
              </View>
              </ImageBackground>
              </TouchableOpacity>
            </View>

            {/* Temples */}
            <View style={{width: '50%', borderTopRightRadius:40, borderBottomRightRadius:40}} >
            <TouchableOpacity>
            <ImageBackground
              source={temple}
              style={{width:'100%' , height:120}}
              // imageStyle = {{ borderTopRightRadius:40, borderBottomRightRadius:40}}
              >
              <View style={{ alignItems:'center', padding:45}}>
                <Text style={{color:"#FFFFFF", fontSize:20}}>Temples</Text>
              </View>
              </ImageBackground>
              </TouchableOpacity>
            </View>
            
          </View>

          {/* Cave and Ancient Plces        */}
          <View style={{flexDirection: 'row',  top:20}}>

            {/* Cave */}
            <View style={{width: '50%'}} >
            <TouchableOpacity>
            <ImageBackground
              source={cave}
              style={{width:'100%', height:120 }}
              // imageStyle = {{borderTopLeftRadius:40, borderBottomLeftRadius:40}}
              >
              <View style={{ alignItems:'center', padding:45}}>
                <Text style={{color:"#FFFFFF", fontSize:20}}>Caves</Text>
              </View>
              </ImageBackground>
              </TouchableOpacity>
            </View>

            {/* parks */}
            <View style={{width: '50%'}} >
            <TouchableOpacity>
            <ImageBackground
              source={parks}
              style={{width:'100%', height:120 }}>
              <View style={{ alignItems:'center', padding:45}}>
                <Text style={{color:"#FFFFFF", fontSize:20}}>Parks</Text>
              </View>
              </ImageBackground>
              </TouchableOpacity>
            </View>

          </View>

          {/* Gardens and Rivers       */}
          <View style={{flexDirection: 'row',  top:20}}>

            {/* Gardens */}
            <View style={{width: '50%'}} >
            <TouchableOpacity>
            <ImageBackground
              source={gardens}
              style={{width:'100%', height:120 }}
              // imageStyle = {{borderTopLeftRadius:40, borderBottomLeftRadius:40}}
              >
              <View style={{ alignItems:'center', padding:45}}>
                <Text style={{color:"#FFFFFF", fontSize:20}}>Gardens</Text>
              </View>
              </ImageBackground>
              </TouchableOpacity>
            </View>

            {/* rivers */}
            <View style={{width: '50%'}} >
              <TouchableOpacity>
              <ImageBackground
              source={rivers}
              style={{width:'100%' , height:120}}>
              <View style={{ alignItems:'center', padding:45}}>
                <Text style={{color:"#FFFFFF", fontSize:20}}>Rivers</Text>
              </View>
              </ImageBackground>
              </TouchableOpacity>
            </View>

          </View>
          
          {/* dam and Ancient Plces        */}
          <View style={{flexDirection: 'row', top:20}}>

            {/* dam */}
            <View style={{width: '50%'}} >
            <TouchableOpacity>
            <ImageBackground
              source={dam}
              style={{width:'100%', height:120 }}
              // imageStyle = {{borderTopLeftRadius:40, borderBottomLeftRadius:40}}
              >
              <View style={{ alignItems:'center', padding:45}}>
                <Text style={{color:"#FFFFFF", fontSize:20}}>Dam</Text>
              </View>
              </ImageBackground>
              </TouchableOpacity>
            </View>

            {/* Ancient places */}
            <View style={{width: '50%'}} >
            <TouchableOpacity>
            <ImageBackground
              source={ancient}
              style={{width:'100%', height:120 }}>
              <View style={{ alignItems:'center', padding:45}}>
                <Text style={{color:"#FFFFFF", fontSize:20}}>Ancient</Text>
              </View>
              </ImageBackground>
              </TouchableOpacity>
            </View>

          </View>
         
          {/* Kovil and Adventure        */}
          <View style={{flexDirection: 'row',  top:20}}>

            {/* Kovil */}
            <View style={{width: '50%'}} >
            <TouchableOpacity>
            <ImageBackground
              source={kovil}
              style={{width:'100%', height:120 }}
              // imageStyle = {{borderTopLeftRadius:40, borderBottomLeftRadius:40}}
              >
              <View style={{ alignItems:'center', padding:45}}>
                <Text style={{color:"#FFFFFF", fontSize:20}}>Kovil</Text>
              </View>
              </ImageBackground>
              </TouchableOpacity>
            </View>

            {/* adventure */}
            <View style={{width: '50%'}} >
            <TouchableOpacity>
            <ImageBackground
              source={adventure}
              style={{width:'100%' , height:120}}>
              <View style={{ alignItems:'center', padding:45}}>
                <Text style={{color:"#FFFFFF", fontSize:20}}>Adventure</Text>
              </View>
              </ImageBackground>
              </TouchableOpacity>
            </View>

          </View>

        
          



          </View>
          {/*=========================================== Header section ends here ==================================================*/}

          




        </ScrollView>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2193b0',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default Categories;