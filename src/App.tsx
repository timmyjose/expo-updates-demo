import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screens/Home"
import DummyScreen from "./screens/DummyScreen"

export type RootStackParamList = {
  Home: undefined
  DummyScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='DummyScreen' component={DummyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
