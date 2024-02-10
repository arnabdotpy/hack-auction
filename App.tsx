import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Platform, Text, View, Image } from 'react-native';
import Home from './screens/home/home';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Images from './images/images';
import Consult from './screens/consult/consult';
import Insight from './screens/insight/insight';
import Explore from './screens/explore/explore';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {

  useEffect(() => {
    // loadResources();
    // AsyncStorage.clear();
  }, []);

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === 'Home') {
            iconName = focused ? Images.Home1 : Images.Home2;
          } else if (rn === 'Explore') {
            iconName = focused ? Images.Compass2 : Images.Compass;
          } else if (rn === 'Insight') {
            iconName = focused ? Images.insights2 : Images.insights;
          } else if (rn === 'Consult') {
            iconName = focused ? Images.consultant2 : Images.consult;
          }
          return <Image source={iconName} style={{ width: Platform.OS == "ios" ? 18 : 19, height: Platform.OS == "ios" ? 18 : 19, marginTop: 6 }} />;
        },
        tabBarLabel(props) {
          let rn = route.name;
          if (rn === 'Home') {
            return <Text style={{ color: props.color, fontSize: 12, paddingBottom: 5, marginBottom: 4, fontWeight: 'bold' }}>Home</Text>;
          } else if (rn === 'Explore') {
            return <Text style={{ color: props.color, fontSize: 12, paddingBottom: 5, marginBottom: 4, fontWeight: 'bold' }}>Explore</Text>;
          } else if (rn === 'Insight') {
            return <Text style={{ color: props.color, fontSize: 12, paddingBottom: 5, marginBottom: 4, fontWeight: 'bold' }}>Insight</Text>;
          } else if (rn === 'Consult') {
            return <Text style={{ color: props.color, fontSize: 12, paddingBottom: 5, marginBottom: 4, fontWeight: 'bold' }}>Consult</Text>;
          }
        },
        tabBarStyle: {
          minHeight: Platform.OS === 'ios' ? 95 : 70,
        },
      })}
    >
      <Tab.Screen name='Home' component={Home} options={{ tabBarActiveTintColor: '#EB5D47CC', tabBarActiveBackgroundColor: "#fff", headerShown: false }} />
      <Tab.Screen name='Explore' component={Explore} options={{ tabBarActiveTintColor: '#EB5D47CC', tabBarActiveBackgroundColor: "#fff", headerShown: false }} />
      <Tab.Screen name='Insight' component={Insight} options={{ tabBarActiveTintColor: '#EB5D47CC', tabBarActiveBackgroundColor: "#fff", headerShown: false }} />
      <Tab.Screen name='Consult' component={Consult} options={{ tabBarActiveTintColor: '#EB5D47CC', tabBarActiveBackgroundColor: "#fff", headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={{
      dark: false,
      colors: {
        primary: 'rgb(255, 45, 85)',
        background: '#fff',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
      },
    }}>
      <Stack.Navigator initialRouteName="TabNavigator">
        {/* Teacher App */}
        <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
