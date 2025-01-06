import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, List } from 'react-native-paper';

export default function Logo() {
    return (
        <View >
            <View style={styles.inlineContainer}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/icons/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>


                <View style={styles.listContainer}>
                    <List.Subheader style={styles.listItem}>வவுனியாப் பல்கலைக்கழகம், இலங்கை</List.Subheader>
                    <List.Subheader style={styles.listItem}>වවුනියා විශ්වවිද්‍යාලය, ශ්‍රී ලංකාව</List.Subheader>
                    <List.Subheader style={styles.listItem}>University of Vavuniya, Sri Lanka</List.Subheader>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#800080',
        padding: 20,
        alignItems: 'center',
        width: '100%',
        
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },

    inlineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    listContainer: {
        marginLeft: 5,
        margin:30,
        
    },
    listItem: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#800080',
        marginVertical: 0, 
        lineHeight: 7,
    },
});
