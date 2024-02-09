import React from 'react'
import { View, Text } from 'react-native'
import styles from './home.style'
import Navbar from '../../components/global/navbar/navbar'
import ViewCompleteInsights from '../../components/home/view-complete-insights/view-complete-insights'

const Home = () => {
  return (
    <View>
      <Navbar title="Home" />
      <ViewCompleteInsights />
    </View>
  )
}

export default Home
