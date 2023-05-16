import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TestScreen = () => {
   
        return (
            <View styles={styles.container} >
                <Text>Test Screen</Text>
                <Button
                    title="Retour à l'accueil"
                    onPress={() => {
                        navigator.navigate('HomeScreen');
                    }}
                />
            </View>
        );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default TestScreen;




