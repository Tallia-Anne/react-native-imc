import React from 'react';
import {View,Text, Button,  StyleSheet} from 'react-native';

class CalculatorScreen extends React.Component {
    render() {
        return (
            <View styles={styles.view} >
                <Text>Screen: Calculator Screen</Text>
                <Button
                    title="Retour à l'accueil"
                    onPress={() => {
                        this.props.navigation.navigate("HomeScreen");
                    }}
                />
            </View>
        );
    }   
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default CalculatorScreen;
