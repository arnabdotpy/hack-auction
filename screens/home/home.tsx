import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './home.style'
import Navbar from '../../components/global/navbar/navbar'
import ViewCompleteInsights from '../../components/home/view-complete-insights/view-complete-insights'
import FeelingToday from '../../components/home/feeling-today/feeling-today'

const Home = () => {
  return (
    <ScrollView>
      <Navbar title="Home" />
      <ViewCompleteInsights />
      <FeelingToday />
    </ScrollView>
  )
}

export default Home
