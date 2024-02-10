import React from 'react'
import { View, Text , Image } from 'react-native'
import styles from './explore.style'
import Constants from "expo-constants";
import Navbar from '../../components/global/navbar/navbar';
import Images from '../../images/images';
const Explore = () => {
  return (
    <View>
      <Navbar title="Explore"/>
      <Image source={Images.Menu} style={{height: 200, width: 'auto'}} />
      <Image source={Images.Story} style={{height: 200, width: 'auto'}} />
    
    </View>
  )
}

export default Explore;