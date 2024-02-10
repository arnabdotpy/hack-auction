import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './explore.style'
import Constants from "expo-constants";
import Navbar from '../../components/global/navbar/navbar';
import Images from '../../images/images';
const Explore = () => {
  return (
    <ScrollView style={{ marginTop: Constants.statusBarHeight }}>
      <Navbar title="Explore" />

      <Text style={{ marginLeft: 20, fontSize: 24, fontWeight: 'bold', marginTop: 15 }}>Inspiration Of the Day</Text>
      <Image source={Images.quote} style={{ height: 80, width: 'auto', margin: 20 }} />
      <Text style={{ marginLeft: 20, fontSize: 22, fontWeight: 'bold' }}>Life Changing Tutorials</Text>
      <Text style={{ marginLeft: 20, fontSize: 16, color: '#757575' }}>Explore our range of tutorials personally curated for you. </Text>
      <Image source={Images.Menu} style={{ height: 440, width: 'auto', margin: 20 }} />
      <Text style={{ marginLeft: 20, fontSize: 22, fontWeight: 'bold' }}>Sleep Stories</Text>
      <Text style={{ marginLeft: 20, fontSize: 16, color: '#757575' }}>Stories to help you get better at sleep.</Text>
      <Image source={Images.Story} style={{ height: 140, width: 'auto', margin: 20 }} />
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
        <Text style={{ color: '#fff', textAlign: 'center', paddingVertical: 12, paddingHorizontal: 10, fontWeight: 'bold', fontSize: 19 }}>Find more Stories</Text>
      </View>
    </ScrollView>
  )
}

export default Explore;