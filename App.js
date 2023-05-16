import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { WelcomeText } from './Components';

export default function App() {
  const log = () => {
    console.log('clic sur un bouton');
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/poids.jpg')}
        style={styles.image}
      />
      {/* <Image
        
        source={{
          uri:'https://images.unsplash.com/photo-1559724087-a45f6a7a35d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80',
        }}
        style={styles.image}
      /> */}
    
      <WelcomeText
        text="Calculateur d'IMC"
      />
      <Button
        // le titre du bouton
        title="Clique moi"
        // couleur du fond
        color="#F266AB"
        onPress={log}
      />
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:16,
  },
  image: {
    width: 256,
    height: 256,
    marginBottom: 32,
  }
 
});
