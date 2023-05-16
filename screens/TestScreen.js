import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TestScreen = ({ navigation }) => {
   
        return (
            <View styles={styles.container} >
                <Text>Test Screen</Text>
                <Button
                    title="Retour à l'accueil"
                    onPress={() => {
                        navigation.navigate('HomeScreen');
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




