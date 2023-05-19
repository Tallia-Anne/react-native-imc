import React from 'react';
import { View, StyleSheet, Image, } from 'react-native';
import { WelcomeText } from '../Components';
import * as RNElements from '@rneui/base';

class HomeScreen extends React.Component {
    render() {
        const goToCalculator = () => {
            this.props.navigation.navigate("CalculatorScreen");
        }
        return (
            <View style={styles.container}>
                <WelcomeText
                    text="Calculateur d'IMC"
                /> 
                <Image
                    source={require('../assets/imc-calculator-home-logo.png_image.png')}
                    style={styles.homeImg}
                />
               
                <RNElements.Button
                    // le titre du bouton
                    title="Calculer mon IMC"
                    onPress={goToCalculator}
                    //  le style du titre du bouton 
                    titleStyle={{
                        color: 'white',
                        marginHorizontal: 20,
                        fontWeight: 'bold',
                        letterSpacing: 1.5,
                        fontSize: 24,
                    }
                    }
                    // style du bouton 
                    buttonStyle={{
                        backgroundColor: 'black',
                        borderWhidth: 2,
                        paddingTop: 16,
                        paddingBottom: 16,
                        borderColor: 'white',
                        borderRadius: 8,
                    }}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 64,
    },
    homeImg: {
        width: 170,
        height: 72,
        borderRadius: 4,
        margin: 96,
    }

});

export default HomeScreen;
