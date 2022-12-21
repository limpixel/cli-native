import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Linking
} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'

import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {useIsFocused} from '@react-navigation/native'

const Login = ({ display = false}) => {
    
    

    const isFocused = useIsFocused()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("The Email has required");
    const [passwordError, setPasswordError] = useState("The Password has required");

    useEffect(() => {
        setEmailError(null)
        setPasswordError(null)
    }, [isFocused])

    const handlerEmail = (val) => {
        setEmail(val)
        setEmailError(null)
    }

    const handlerPassword = (val) => {
        setPassword(val)
        setPasswordError(null)
    }

    const handlerLogin = () => {
        if (email == "") setEmailError("The email is required")
        if (password == "") setEmailError("The Password is required")

        if (email !== "" && password !== "") {
            
        }
    }

    
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                { isFocused && <Animatable.Text style={styles.headerText} duration={1000} animation="bounceIn"> Login </Animatable.Text> }
            </View>
            { isFocused && <Animatable.View style={styles.content} duration={1000} animation="fadeInUpBig">

                        <Text style={[styles.textLabel1, styles.paddingTop30]}>Email</Text>
                        <View
                            style={{
                                position: 'relative'
                            }}>
                            <FontAwesome5
                                style={{
                                    position: 'absolute',
                                    left: 46,
                                    top: 26,
                                    zIndex: 999,
                                    elevation: 1,
                                    color: '#999999'
                                }}
                                size={20}
                                name={'envelope'}
                                solid="solid"/>
                            <TextInput
                                onChangeText={(value)=> handlerEmail(value)}
                                style={[styles.textInput, { borderColor: emailError ? '#FF0000':'#DDDF82' } ]}
                                placeholder="Email"
                                 />
                        </View>
                        { !!emailError && 
                            <Animatable.Text duration={1000} animation='fadeInRight' style={{ fontSize: 13, color: '#FFFFFF', backgroundColor: '#FF0000', alignSelf:'flex-start', marginLeft: 25, marginTop: 4, padding: 5, borderRadius: 6  }}>
                                <FontAwesome5 style={{ color: 'ffffff',}} size={16} name={'info-circle'} solid/> {emailError}
                            </Animatable.Text>
                        }

                        <Text style={[styles.textLabel1, styles.paddingTop10]}>Password</Text>
                        <View>
                            <View
                                style={{position: 'relative'}}>
                                <FontAwesome5
                                    style={{
                                        position: 'absolute',
                                        left: 46,
                                        top: 26,
                                        zIndex: 999,
                                        elevation: 1,
                                        color: '#999999'
                                    }}
                                    size={20}
                                    name={'key'}
                                    solid="solid"/>
                                <TextInput style={[styles.textInput, { borderColor: emailError ? '#FF0000': '#DDDFE2' }
                                    ]}

                                    placeholder="Password"/>
                            </View>
                            { !!emailError && 
                                <Animatable.Text duration={1000} animation='fadeInRight' style={{ fontSize: 13, color: '#FFFFFF', backgroundColor: '#FF0000', alignSelf:'flex-start', marginLeft: 25, marginTop: 4, padding: 5, borderRadius: 6  }}>
                                    <FontAwesome5 style={{ color: 'ffffff',}} size={16} name={'info-circle'} solid/> {emailError}
                                </Animatable.Text>
                            }

                        </View>

                        <Text style={styles.textLabel2}>Forgot password?</Text>
                        <TouchableOpacity onPress={() => handlerLogin()}>
                            <LinearGradient
                                colors={['#279511', '#36A420', '#6ab65b']}
                                style={styles.linearGradient}>
                                <Text style={styles.buttonText}>
                                    Login
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </Animatable.View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1877F2'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 45,
        fontFamily: 'Roboto-Black',
        color: '#FFFFFF'
    },
    content: {
        flex: 3,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    textLabel1: {
        fontFamily: 'Roboto-Light',
        fontSize: 18,
        paddingLeft: 25,
        color: '#1C1E21'
    },
    textLabel2: {
        fontFamily: 'Roboto-Light',
        fontSize: 16,
        paddingLeft: 25,
        paddingTop: 9,
        color: '#1877F2'
    },
    paddingTop10: {
        paddingTop: 10
    },
    paddingTop30: {
        paddingTop: 30
    },
    textInput: {
        borderWidth: 1,
        backgroundColor: '#F9F9FF',
        paddingTop: 13,
        paddingRight: 13,
        paddingBottom: 13,
        paddingLeft: 55,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 9,
        borderRadius: 6,
        fontSize: 16
    },
    linearGradient: {
        margin: 25,
        borderRadius: 6,
        padding: 16,
        marginTop: 30
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'Roboto-Light'
    }
})

export default Login;