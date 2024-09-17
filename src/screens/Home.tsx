import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { SERVER_URL } from '../config'

const Home = () => {
  const navigaton = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  Alert.alert(`SERVER_URL = ${SERVER_URL}`)

  return (
    <View style={styles.container}>
      <Text>Update 2</Text>
      <Text>Update 1</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigaton.navigate('DummyScreen')}>
          <Text>DummyScreen</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#c0c0c0',
    borderRadius: 2,
    width: '40%',
    height: 40,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Home