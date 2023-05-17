import React from 'react';
import {View,Text, Button,  StyleSheet} from 'react-native';
import { ImcCalculator } from '../Components';




const CalculatorScreen = ({ navigation }) => {
        return (
            <View style={styles.view} >
               <ImcCalculator/>
            </View>
        );
    }   


const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default CalculatorScreen;
