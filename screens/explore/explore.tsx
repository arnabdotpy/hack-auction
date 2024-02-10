import React from 'react'
import { View, Text , Image, ScrollView } from 'react-native'
import styles from './explore.style'
import Constants from "expo-constants";
import Navbar from '../../components/global/navbar/navbar';
import Images from '../../images/images';
const Explore = () => {
  return (
    <ScrollView style={{marginTop: Constants.statusBarHeight}}>
      <Navbar title="Explore"/>
      
      <Image source={Images.Menu} style={{height: 200, width: 'auto'}} />
      <Image source={Images.Story} style={{height: 200, width: 'auto'}} />
    
    </ScrollView>
  )
}

export default Explore;