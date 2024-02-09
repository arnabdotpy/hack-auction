import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './feeling-today.style'
import Images from '../../../images/images'

const FeelingToday = () => {
  return (
    <View style={{margin: 20}}>
      <Text style={{fontWeight: 'bold', fontSize: 17}}>How are you feeling today?</Text>
      <Image
        style={{width: 300, height: 300, marginTop: 20}}
        source={Images.img}
      />
    </View>
  )
}

export default FeelingToday;