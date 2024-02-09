import React from 'react'
import { View, Text } from 'react-native'
import styles from './view-complete-insights.style'

const ViewCompleteInsights = () => {
  return (
    <View>
      <View style={{ backgroundColor: '#FEB95F30', borderRadius: 10, margin: 20 }}>

        {/* Stats Container */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, marginHorizontal: 10 }}>
          <View>
            <Text style={{ color: '#EB5D47CC', fontWeight: 'bold', fontSize: 25, textAlign: 'center' }}>+10%</Text>
            <Text style={{ color: '#EB5D47CC', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Mood Gain</Text>
          </View>
          <View style={{ height: '100%', backgroundColor: '#EB5D47CC', width: 2 }}></View>
          <View>
            <Text style={{ color: '#EB5D47CC', fontWeight: 'bold', fontSize: 25, textAlign: 'center' }}>59 🔥</Text>
            <Text style={{ color: '#EB5D47CC', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Streak</Text>
          </View>
          <View style={{ height: '100%', backgroundColor: '#EB5D47CC', width: 2 }}></View>
          <View>
            <Text style={{ color: '#EB5D47CC', fontWeight: 'bold', fontSize: 25, textAlign: 'center' }}>44%</Text>
            <Text style={{ color: '#EB5D47CC', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Score</Text>
          </View>

        </View>
        {/* View Complete Insights */}
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
          <Text style={{ color: '#fff',  textAlign: 'center', paddingVertical: 12, paddingHorizontal: 10, fontWeight: 'bold' }}>View Complete Insights</Text>
        </View>
      </View>
    </View>
  )
}

export default ViewCompleteInsights;