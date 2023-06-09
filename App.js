
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, CalculatorScreen, AboutScreen } from './screens';
import { NavigationTabs } from './navigation';

// on va stocker la fonction createNativeStack dans une variable qui stack 
// createStackNavigator() permet de créer une stack de navigation
// une stack est définie par une fonction createStackNavigator()
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="NavigationTabs"
          component={NavigationTabs}
          options={{ headerShown: false, }}
           />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen} />
        <Stack.Screen
          name="CalculatorScreen"
          component={CalculatorScreen} />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}


