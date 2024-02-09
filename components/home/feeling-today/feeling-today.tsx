import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './feeling-today.style'
import Images from '../../../images/images'

const FeelingToday = () => {
  return (
    <View>
       <Text style={{fontWeight: 'bold', fontSize: 17, paddingLeft: 70}}>How are you feeling today?</Text> 
    <View style={{margin: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
      
      <Image
        style={{width: 37, height: 28, marginTop: 20 }}
        source={Images.image1}
      />
      <Image
        style={{width: 37, height: 28, marginTop: 20}}
        source={Images.image2}
      />
      <Image
        style={{width: 37, height: 28, marginTop: 20}}
        source={Images.image3}
      />
      <Image
        style={{width: 37, height: 28, marginTop: 20}}
        source={Images.image4}
      />
      <Image
        style={{width: 37, height: 28, marginTop: 20}}
        source={Images.image5}
      />
    </View>
    </View>

  )
}

export default FeelingToday;