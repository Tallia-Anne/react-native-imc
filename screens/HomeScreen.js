import React from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import { WelcomeText } from '../Components';

class HomeScreen extends React.Component {
    render() {
        const goToCalculator = () => {
            this.props.navigation.navigate("CalculatorScreen");
        }
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/poids.jpg')}
                    style={styles.homeImg}
                />
                <WelcomeText
                    text="Calculateur d'IMC" 
                /> 
                <Button
                    // le titre du bouton
                    title="Aller sur la page CalculatorScreen"
                    // couleur du fond
                    color="#F266AB"
                    onPress={goToCalculator}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeImg: {
        width: 256,
        height: 256,
        borderRadius: 64,
        margin: 16,
    }

});

export default HomeScreen;
