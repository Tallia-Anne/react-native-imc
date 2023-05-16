import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation as FoundationIcons } from 'react-native-vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import TestScreen from '../screens/TestScreen';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
    return (
        // backBehavio permet de revenir à la page précédente par ordre exemple sur la page de connexion
        <Tab.Navigator backBehavior='order' >
            <Tab.Screen name="HomeScreen"
                component={HomeScreen}
                options={
                    {
                        tabBarlabel: "Accueil",
                        tabBarIcon: () => {
                            <FoundationIcons name="home" color={color}  size={size} />
                        },
                        title:"Accueil",
                    }
                }
            />
            <Tab.Screen name="Calculator"
                component={CalculatorScreen}
                options={
                    {
                        tabBarlabel: "Mon IMC",
                        tabBarIcon: () => {
                            <FoundationIcons name="pencil" color={color} size={size} />
                        },
                        title: "Calculer mon IMC",
                    }
                }
                 />
            <Tab.Screen name="Test"
                component={TestScreen}
                options={
                    {
                        tabBarlabel: "Test",
                        tabBarIcon: () => {
                            <FoundationIcons name="widget" color={color} size={size} />
                        },
                        title: "Test",
                    }
                }
                 />
        </Tab.Navigator>
    );
}



export default NavigationTabs;
