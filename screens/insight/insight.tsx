import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './insight.style'
import Navbar from '../../components/global/navbar/navbar'
import Images from '../../images/images'
import Constants from "expo-constants";

const Insight = () => {
  return (
    <View style={{marginTop: Constants.statusBarHeight}}>
      {/* <Text style={styles.example}>Insight</Text> */}
      <Navbar title="Insights" />
      <Image source={Images.Chart} style={{height: 200, width: 'auto'}} />
      <Image source={Images.piechart} style={{height: 40, width: 40}} />
      
      
    </View>
  )
}

export default Insight;