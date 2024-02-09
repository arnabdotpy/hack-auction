import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './daily-test.style'
import Images from '../../../images/images'

const DailyTest = () => {
  return (
    <View>
      <Image style={{ width: 'auto', height: 180, borderRadius: 15, margin: 20 }} source={Images.takeATest} />
    </View>
    // <View style={{backgroundColor: '#EB5D4730', margin: 20, padding: 15, borderRadius: 10}}>
    //   <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>Daily Test</Text>
    //   <Text style={{textAlign: 'center', fontSize: 16, fontWeight: '400'}}>Take a moment to reflect and learn more about your well-being.</Text>
    //   <Text style={{textAlign: 'center', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 25,  backgroundColor: '#EB5D47CC', width: '50%', color: '#fff', fontWeight: 'bold', marginTop: 10, alignSelf: 'center'}}>Start Test</Text>
    // </View>
  )
}

export default DailyTest;