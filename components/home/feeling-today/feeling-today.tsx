import React from 'react'
import { View, Text } from 'react-native'
import styles from './feeling-today.style'

const FeelingToday = () => {
  return (
    <View style={{margin: 20}}>
      <Text style={{fontWeight: 'bold', fontSize: 17}}>How are you feeling today?</Text>
    </View>
  )
}

export default FeelingToday;