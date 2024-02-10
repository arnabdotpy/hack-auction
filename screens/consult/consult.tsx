import React from 'react'
import { View, Text, Image, ScrollView} from 'react-native'
import styles from './consult.style'
import Navbar from '../../components/global/navbar/navbar'
import Images from '../../images/images'
import Constants from "expo-constants";


const Consult = () => {
  return (
    <ScrollView style={{marginTop: Constants.statusBarHeight}}>
      <Navbar title="Consult"/>
      <Image source={Images.Tools} style={{height: 108, width: 'auto', margin: 20}} />
      <Image source={Images.Bot} style={{height: 150, width: 'auto', margin: 20}} />
      <Text style={{marginLeft: 20, fontSize: 24, fontWeight: 'bold'}}>Consult an Expert</Text>
      <Image source={Images.Card1} style={{height: 180, width: 'auto', margin: 20}} />
      <Image source={Images.Card2} style={{height: 180, width: 'auto', margin: 20}} />
      <Image source={Images.Card3} style={{height: 180, width: 'auto', margin: 20}} />
      <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
            backgroundColor: '#EB5D47CC', 
            width: '55%',
            borderRadius: 25,
            alignSelf: 'center'
          }}>
          <Text style={{ color: '#fff',  textAlign: 'center', paddingVertical: 12, paddingHorizontal: 10, fontWeight: 'bold', fontSize: 19 }}>Find more Experts</Text>
        </View>
    </ScrollView>
  )
}

export default Consult;