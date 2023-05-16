import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, CalculatorScreen, TestScreen } from '../screens';

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
