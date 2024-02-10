import React from 'react'
import { View, Text, Image} from 'react-native'
import styles from './consult.style'
import Navbar from '../../components/global/navbar/navbar'
import Images from '../../images/images'
import Constants from "expo-constants";


const Consult = () => {
  return (
    <View style={{marginTop: Constants.statusBarHeight}}>
      <Navbar title="Consult"/>
      <Image source={Images.Tools} style={{height: 200, width: 'auto'}} />
      <Image source={Images.Bot} style={{height: 200, width: 'auto'}} />
      <Image source={Images.Card1} style={{height: 200, width: 'auto'}} />
      <Image source={Images.Card2} style={{height: 200, width: 'auto'}} />
      <Image source={Images.Card3} style={{height: 200, width: 'auto'}} />

     {/* <Text style={styles.example}>Example</Text>*/ }
    </View>
  )
}

export default Consult;