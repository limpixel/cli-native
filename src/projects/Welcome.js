import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />

            <View style={styles.boxillustration}>
                 <View style={styles.bg}>
                <Image  style={styles.img } 
                resizeMode={'contain'} 
                source={{ uri: 'https://logos-world.net/wp-content/uploads/2020/10/Free-Symbol.png'}} 
                alt="new"/>

                <Image  style={styles.img2 } 
                resizeMode={'contain'} 
                source={{ uri: 'https://stories.freepiklabs.com/storage/14075/pair-programming-rafiki-3057.png'}} 
                alt="new"/>

                <Text style={styles.Text}>
                    KODEIN
                </Text>
                <Text style={styles.Text2}>
                    SEKOLAH DEVELOPER INDONESIA
                </Text>
                <TouchableOpacity 
                        onPress={() => navigation.navigate('Home')}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText} >Selanjutnya</Text>
                        <FontAwesome5
                            style={styles.icon}
                            size={26}
                            name={'arrow-circle-right'}
                            solid
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },

    Text: {
        marginTop: 30,
        fontWeight: "bold",
        fontSize: 30,
        color: '#2146C7'
    },

    Text2: {
        fontWeight: "bold",
        fontSize: 17,
        color: '#0D4C92'
    },

    bg: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    img: {
        height: 150,
        width: 150,
        marginVertical: 4,
        borderRadius: 12,
        alignSelf: "center"
    },

    img2: {
        marginTop: 60,
        height: 300,
        width: 300,
        marginVertical: 4,
        borderRadius: 12,
    },

    button: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5,
        width: 350,
        height: 45,
        paddingHorizontal: 14,
        backgroundColor: '#149B8B',
        borderRadius: 15 
    },

    icon: {
        color : 'white',
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 16
    },

    boxillustration: {
        flex: 3,
        alignSelf: "center",
        position: 'relative'
    }
});


export default Welcome