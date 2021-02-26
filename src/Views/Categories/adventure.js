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


import { Home } from "../Home";

class Adventure extends Component{

  static navigationOptions = {
    Title:'Settings'
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
              >Adventure
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

export default Adventure;