import React from 'react'
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native'
import styles from './daily-test.style'
import Images from '../../../images/images'
import TakeTestModal from '../take-test-modal/take-test-modal'

const DailyTest = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} onPress={() => {
        setModalVisible(true);
      }}>
        <Image style={{ width: 'auto', height: 180, borderRadius: 15, margin: 20 }} source={Images.takeATest} />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => {
            setModalVisible(!modalVisible);
          }}>
            <Image
              source={Images.back}
              style={{ width: 25, height: 25, margin: 20, alignSelf: 'center' }}
            />
          </TouchableOpacity>
          <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Back to Home</Text>
        </View>
        <TakeTestModal />
      </Modal>
    </View>
  )
}

export default DailyTest;