import 'react-native-gesture-handler'
import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailsScreen from './src/views/screens/DatailsScreen'
import DrawerNavigator from './src/views/navigation/DrawerNavigator';
//import HomeScreen from './src/views/screens/HomeScreen';
const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen  name="DrawerNavigation" component={DrawerNavigator}/> 
        <Stack.Screen  name="DetailsScreen" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
} 

export default App