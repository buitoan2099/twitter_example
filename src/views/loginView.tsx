import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FAB, IconButton, TextInput } from "react-native-paper";
import { useState } from "react";
import * as Animatable from 'react-native-animatable';
import { Colors } from "../values/colors";
import { TextStyles } from "../styles/textStyles";
import { indexStore, } from "../stores";
import { Routes } from "../navigation/routes";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const LoginView = ({ navigation }: { navigation: any }) => {
    const [data, setData] = useState(() => {
        return {
            email: '',
            password: '',
            showPass: false,
            valiE: false,
            valiP: false,
            error: '',
        }
    });

    function checkPass() {
        if (data.password.trim().length < 8) {
            setData(pre => ({ ...pre, valiP: true, }));
        } else {
            setData(pre => ({ ...pre, valiP: false, }));
        }


    }
    function checkEmail() {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(data.email) == false) {
            // setData({ ...data, valiE: true, });

            setData(pre => ({ ...pre, valiE: true, }));
        }
        else {
            setData(pre => ({ ...pre, valiE: false, }));
        }

    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{
                width: '100%', height: '100%', backgroundColor: Colors.COLOR_WHITE,
                justifyContent: 'flex-start', alignItems: 'center', padding: 40
            }} >
                <IconButton icon="twitter" size={80} color={Colors.COLOR_BLUE} />

            </View>
            <View style={{
                width: '100%', height: '100%', position: 'absolute',
                alignItems: 'center', justifyContent: 'center',
            }}>
                <View style={{
                    width: '100%', height: '100%',
                    alignItems: 'center', justifyContent: 'center',
                }}>
                    <View
                        style={style.background}
                    >
                        <Text style={TextStyles.TitleBold}>
                            {"LOGIN ACCOUNT"}
                        </Text>
                        <TextInput
                            error={data.valiE}
                            value={data.email}
                            onChangeText={(text) => {
                                setData({ ...data, email: text, valiE: false, })
                            }}
                            label={"Email"}
                            mode="outlined"
                            style={{ height: 60, width: '100%', marginTop: 20 }}
                            onEndEditing={checkEmail}
                        />
                        <View style={{ width: '100%', height: 20 }}>
                            {!data.valiE
                                ? null
                                : <Animatable.View animation="fadeInLeft" duration={1000}>
                                    <Text style={{ color: 'red', fontSize: 14, fontWeight: '400', textAlign: 'left', width: '100%' }}>
                                        Email is invalid.
                                    </Text>
                                </Animatable.View>
                            }
                        </View>

                        <TextInput
                            label="Password"
                            value={data.password}
                            error={data.valiP}
                            style={{ height: 60, width: '100%', }}
                            onChangeText={(text) => {
                                setData({ ...data, password: text, valiP: false, })
                            }}
                            mode='outlined'
                            secureTextEntry={data.showPass}
                            onEndEditing={checkPass}
                            right={<TextInput.Icon name={(data.showPass) ? "eye" : "eye-off"}
                                style={{ borderLeftColor: Colors.COLOR_BLACK, paddingTop: 8 }}
                                onPress={() => { setData({ ...data, showPass: !data.showPass }) }} />}

                        />
                        <View style={{ width: '100%', height: 20 }}>
                            {!data.valiP
                                ? null
                                : <Animatable.View animation="fadeInLeft" duration={1000}>
                                    <Text style={{ color: 'red', fontSize: 14, fontWeight: '400', textAlign: 'left', width: '100%' }}>
                                        Password must be 8 characters long.
                                    </Text>
                                </Animatable.View>
                            }
                        </View>
                        <TouchableOpacity
                            style={style.button}
                            onPress={() => {
                                checkEmail();
                                checkPass();
                                indexStore.user.login({ navigation: navigation, user: data.email })

                            }}
                        >
                            <Text style={{
                                fontSize: 18, color: Colors.COLOR_WHITE, fontWeight: 'bold',
                            }}>
                                LOG IN
                            </Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                            <View style={style.title}>
                                <Text style={{
                                    width: 50, textAlign: 'center', fontSize: 18,
                                    color: 'black', fontWeight: '400',
                                }}>or</Text>
                            </View>
                            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <IconButton
                                icon="facebook"
                                color="white"
                                style={{ backgroundColor: "#4267B2" }}
                                size={30}
                                onPress={() => {
                                    // navigation.navigate(Routes.ITEM_EDIT);
                                }}
                            />
                            <View style={{ width: 10, }} />
                            <IconButton
                                icon="google-plus"
                                color="white"
                                style={{ backgroundColor: "#db4a39" }}
                                size={30}
                                onPress={() => {
                                    // navigation.navigate(Routes.ITEM_EDIT);
                                }}
                            />
                        </View>
                    </View>
                    <Text style={[TextStyles.ContextBold, { alignSelf: 'center' }]}>
                        {"Don't have an account?"}
                    </Text>
                    <TouchableOpacity >
                        <Text style={[TextStyles.TitleButton, { alignSelf: 'center' }]}>
                            {"REGISTER"}
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    );
}
const style = StyleSheet.create({
    background: {
        elevation: 10, width: 300, height: 450, backgroundColor: 'white',
        borderRadius: 24, alignItems: 'center', padding: 20, marginTop: 180, marginBottom: 20
    },
    button: {
        elevation: 5, width: '100%', backgroundColor: Colors.COLOR_BLUE, marginBottom: 20, marginTop: 40,
        borderRadius: 24, alignItems: 'center', paddingVertical: 10,
    },
    title: {
        alignItems: 'center', backgroundColor: Colors.COLOR_LIGHT_GRAY, borderRadius: 24,
        justifyContent: 'center', paddingBottom: 2
    }
});
export default LoginView;