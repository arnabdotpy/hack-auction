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
      <Text style={{marginLeft: 20, fontSize: 24, fontWeight: 'bold', marginTop: 15}}>Mood Timeline</Text>
      <Text style={{marginLeft: 20, fontSize: 14}}>How have you been feeling this month</Text>
      <Image source={Images.Chart} style={{height: 220, width: 'auto', margin: 20}} />
      <Text style={{marginLeft: 20, fontSize: 24, fontWeight: 'bold'}}>Resilience</Text>
      <Image source={Images.piechart} style={{height: 210, width: 'auto', margin: 20}} />
      <Text style={{fontSize: 14, textAlign: 'center', alignSelf: 'center', width: 350, color: '#757575'}}>Try to balance your resilience score by choosing activites that build different types</Text>
    </View>
  )
}

export default Insight;