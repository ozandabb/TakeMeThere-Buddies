import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Image , FlatList, ScrollView ,TouchableOpacity } from 'react-native';
import HomeBackImage from '../Asserts/home_banner.jpg';
import {Feather} from '@expo/vector-icons';

import waterfalls from '../Asserts/waterfalls.jpg';
import camping from '../Asserts/camping.jpg';
import hiking from '../Asserts/climbing.jpg';
import beach from '../Asserts/beach.jpg';

const Home = () =>{

     const [Gallery, setstate] = useState([
      {image: {waterfalls}, title : 'Waterfalls' , key: '1' },
      {image: {camping}, title : 'Camping' , key: '2' },
      {image: {hiking}, title : 'Hiking' , key: '3' },
      {image: {beach}, title : 'Beach' , key: '4' },
    ]);

   

    return(
      <View>

        {/*=========================================== Header section start here ==================================================*/}
        <View>
          <ImageBackground
          source={HomeBackImage}
          style={{width:'100%', height: 300 }}
          imageStyle = {{borderBottomRightRadius:65}}>

            <View style={styles.DarkOverlay}></View>
            {/* Header text */}
            <View style={styles.textSection}>
              <Text style={styles.textStyle}>Find your dream place</Text>
              <Text style={styles.textdesc}>Start dreaming and plan your Bucket List</Text>

               {/* Header section Go Explore */}
              <View style={styles.goExploreSec}>

                <View style={styles.box}>
                  <View style={styles.inner}>
                    <Text style={styles.goExploreText}>Go Explore !</Text>
                  </View>
                </View>
                <View style={styles.box}>
                  <View style={styles.inner}>
                    <Feather name='search' size={22} color='#666'
                    style={{
                      position:'absolute',
                      top:17,
                      left:50
                    }}></Feather>
                  </View>
                </View>

              </View>

            </View>

          </ImageBackground>
        </View>
        {/*=========================================== Header section ends here ===================================================*/}

        {/* ===========================================Categories section start here ===============================================*/}
        <View>
          <View style={{top:20, left:20}}>
            <Text style={{fontSize:15}}>R e c o m m e n d e d</Text>
            <Text style={{fontSize:18, color:'#000'}}>Travel Places By Categories</Text>
          </View>

          <ScrollView horizontal={true}>
            <View  style={{top:50}}>
            <TouchableOpacity>
            <Image source={waterfalls} style={{width:150, marginRight:14, height:250, borderRadius:10}}/>
            <Image source={hiking} style={{width:150, marginRight:14, height:250, borderRadius:10}}/>
            <Image source={beach} style={{width:150, marginRight:14, height:250, borderRadius:10}}/>
            <Image source={camping} style={{width:150, marginRight:14, height:250, borderRadius:10}}/>
            </TouchableOpacity>
{/*        
              <FlatList
              horizontal={true}
              data={Gallery}
              renderItem={({item}) => {
                return(
                  <View>
                    <TouchableOpacity>
                      <Image source={item.image} style={{width:150, marginRight:14, height:250, borderRadius:10}}/>
                    </TouchableOpacity>
                  </View>

                )

              }}/> */}
            </View>
          </ScrollView>
        </View>
        {/* ===========================================Categories section ends here============================================== */}







      </View>
    )
  // }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  DarkOverlay:{
    position:'absolute',
    top:0,
    right:0,
    left:0,
    height:300,
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

  }
 

});

export default Home;