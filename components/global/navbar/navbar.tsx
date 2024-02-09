import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './navbar.style'

const Navbar = ({title}: any) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15}}>
      <View style={{flexDirection: 'row', gap: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 35}}>{title}</Text>
      </View>
      <View>
        <Image
          style={{width: 45, height: 45, borderRadius: 50}}
          source={{
            uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png',
          }}
        />
      </View>
    </View>
  )
}

export default Navbar;