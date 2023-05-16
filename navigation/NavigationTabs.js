import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import TestScreen from '../screens/TestScreen';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="Calculator" component={CalculatorScreen} />
            <Tab.Screen name="Test" component={TestScreen} />
        </Tab.Navigator>
    );
}



export default NavigationTabs;
