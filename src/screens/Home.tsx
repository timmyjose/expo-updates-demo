import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

const Home = () => {
  const navigaton = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Text>Test Update 3</Text>
      <Text>Test Update 2</Text>
      <Text>Test Update 1</Text>
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