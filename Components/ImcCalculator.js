// useState est un hook 
import React, { useState, useCallback } from 'react';
// ScrollView est un element va devenir scrollable
// RefreshControl est un component qui permet d'afficher un refresh
// ScrollView est un composant permet d'intégrer une vue scrollable
// TouchableOp Ce composant permet de mettre en place un
// wrapper pour les éléments pressables, qui verront leur opacité
// diminuer quand l’utilisateur cliquera dessus
import {RefreshControl, ScrollView, Text, StyleSheet,TouchableOpacity, View} from 'react-native';
import { Input as ElementsInput } from '@rneui/base';

const ImcCalculator = () => {
    //    variable /methode
    const [size, setSize] = useState(''); // taile
    const [weight, setWeight] = useState(''); // poids
    const [imc, setImc] = useState(0); //imc
    const [result, setResult] = useState(''); // resultat
    const [refreshing, setRefreshing] = useState(false); // refraichissement l'ecran
    
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    })
    
    const calculateIMC = (size, weight) => {
        let imc = (Number(weight) * 10000) / (Number(size) * Number(size));
        imc = imc.toFixed(1);
        setImc(imc);
    
        switch (true) {
                case (imc <= 18.5):
                setResult("Maigreur, consultez un nutritionniste.")
                break;
            case (imc <= 25 && imc > 18.5):
                setResult("Poids normal.")
                break;
            case (imc <= 30 && imc > 25):
                setResult("Surpoids.")
                break;
            case (imc <= 35 && imc > 30):
                setResult("Obésité modérée.")
                break;
            case (imc <= 40 && imc > 35):
                setResult("Obésité sévère, consultez un nutritionniste.")
                break;
            case ( imc > 40):
                setResult("Obésité morbide, consultez un nutritionniste rapidement.")
                break;
                 default:
                setResult("Les valeurs données sont incorrectes");
                break;
        }
    }
    
    return (
        <ScrollView
            styles={styles.scrollContainer}
            RefreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            contentContainerStyle={{flexGrow:1, justifyContent:'center'}}
        >
           
            <ElementsInput
                rightIcon={{
                    type: "foundation",
                    name: "arrow-up",
                }}   
                onChangeText={setSize}
                value={size}
                placeholder="votre taille en cm"
                keyboardType="numeric"
            
            />
            <ElementsInput
                rightIcon={{
                    type: "foundation",
                    name: "burst",
                }}
                onChangeText={setWeight}
                value={weight}
                placeholder="votre poids en kg"
                keyboardType="numeric"

            />
            <TouchableOpacity
                style={styles.calculateBtn}
                onPress={() =>{calculateIMC(size, weight)}}
            >
                <Text style={styles.calculateBtnText} >
                    Calculer mon IMC
                </Text>
            </TouchableOpacity>
            <View>
                <Text style={styles.resultIMC}>
                    {imc}
                </Text>
                <Text style={styles.resultText}>
                    {result}
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    scrollContainer: {
        width: "100%",
        flex:1,
    },

    calculateBtn: {
        margin: 30,
        borderWidth: 0.5,
        borderRadius: 4,
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        paddingTop: 12,
        paddingBottom: 12,
        justifyContent: "center",
        
    },
    calculateBtnText: {
        fontSize: 24,
        textAlign: "center",
        color: "#fff",
    },
    resultIMC: {
        fontSize: 48,
        fontWeight: "900",
        textAlign: "center",
        color:"#000",
    },
    resultText: {
        fontSize: 24,
        textAlign: "center",
        marginHorizontal: 12,   
    },
})

export default ImcCalculator;




