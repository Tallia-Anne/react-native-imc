import React from 'react';
import { View, StyleSheet, Text, SectionList } from 'react-native';
import * as RNElements from '@rneui/base';

const AboutScreen = () => {
    // les données de la sectionList
    const aboutSecctionsDatas = [
        {
            title: 'Développeur',
            data:["Tallia Wambiekele Kiyeko", "Groupe de formation React Native-G2R Formation Paris"],
        },
        {
            title: 'Type de projet',
            data: ["Open-Source"],
        },
        {
            title: 'Date de création',
            data: ["Mai 2023"],
        },
        {
            title: 'Objectif de l\'application',
            data: ["Mai 2023"],
        },
        {
            title: 'Lieu de formation',
            data: ["G2R Formation", "102 Av. Philippe Auguste", "75011 Paris"],
        },
        {
            title: 'Nom du formateur',
            data: ["Dufrène Valérian"],
        },
        {
            title: 'Informations complémentaires',
            data: ["Projet réalisé lors d'une formation React Native",
                "Objectif final [chapitre 1, Module 2] de la formation React Native"]
        }
    ];
   
        return (
            <View style={styles.container} >
                {/* unfris */}
                <RNElements.Avatar
                    size="xlarge"
                    rounded
                    source={require("../assets/giphy.gif")}
                    margin={32}
                />
                <SectionList
                    sections={aboutSecctionsDatas}
                    keyExtractor={(item, index) => item + index}
                    // rendu de la list
                    renderItem={({ item }) => (
                        <View>
                            <Text style={styles.sectionListTitle}>
                                {item}
                            </Text>
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.sectionListHeader}  >{title}</Text>
                    )}
                    style={styles.sectionList}
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
    sectionList: {
        width: '100%',
        flex: 1,
        textAlign:"center", 
    },
    sectionListTitle: {
        fontSize:22,
        textAlign: "center",
        color:"#666",
        
    }, 
    sectionListHeader: {
        fontSize: 22,
        fontWeight: "700",
        backgroundColor: '#fff',
        padding: 10,
        textAlign:"center",
    },
    item: {
        paddingHorizontal: 15,
        marginVertical:10,
    },
});

export default AboutScreen;




