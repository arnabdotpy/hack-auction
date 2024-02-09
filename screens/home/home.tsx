import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './home.style'
import Navbar from '../../components/global/navbar/navbar'
import ViewCompleteInsights from '../../components/home/view-complete-insights/view-complete-insights'
import FeelingToday from '../../components/home/feeling-today/feeling-today'
import DailyTest from '../../components/home/daily-test/daily-test'
import Constants from 'expo-constants';

const Home = () => {
  return (
    <ScrollView style={{marginTop: Constants.statusBarHeight}}>
      <Navbar title="Home" />
      <ViewCompleteInsights />
      <FeelingToday />
      <DailyTest />
    </ScrollView>
  )
}

export default Home
