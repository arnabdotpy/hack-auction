import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import styles from './home.style'
import Navbar from '../../components/global/navbar/navbar'
import ViewCompleteInsights from '../../components/home/view-complete-insights/view-complete-insights'
import FeelingToday from '../../components/home/feeling-today/feeling-today'
import DailyTest from '../../components/home/daily-test/daily-test'
import Constants from 'expo-constants';
import Images from '../../images/images'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
  const [streak, setStreak] = React.useState(0);

  const getStreak = async () => {
    try {
      const value: any = await AsyncStorage.getItem('streak')
      if (value !== null) {
        setStreak(value);
      }
    } catch (e) {
      console.log(e);
    }
  }

  React.useEffect(() => {
    getStreak();
  }, []);

  return (
    <ScrollView style={{marginTop: Constants.statusBarHeight}}>
      <Navbar title="Home" />
      <ViewCompleteInsights streak={streak} />
      <FeelingToday />
      <DailyTest streak={streak} getStreak={getStreak} />
      <Image
        style={{ width: 'auto', height: 500, marginTop: 20, marginHorizontal: 20}}
        source={Images.homePageBottom}
      />
    </ScrollView>
  )
}

export default Home
