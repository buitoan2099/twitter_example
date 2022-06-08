import React, { useEffect, useState } from "react";
import { View, Image, ActivityIndicator, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { Routes } from "../navigation/routes";
import store from "../stores"
import { Colors } from "../values/colors";

const SplashView = ({ navigation }: { navigation: any }) => {

    useEffect(() => {
        setTimeout(() => {
            //Check if user_id is set or not
            //If not then send for Authentication
            //else send to Home Screen
            // AsyncStorage.getItem('user_id').then((value) =>

            // store.userStore.getInitUser(navigation)

        }, 200);
    }, []);
    return (
        <View style={styles.container}>
            <View style={{
                width: "100%", margin: 30, flex: 2,
                justifyContent: 'center', alignItems: 'center'
            }}>
                <IconButton icon="twitter" size={100} color={Colors.COLOR_WHITE} />
            </View>

            <ActivityIndicator
                animating={true}
                color={Colors.COLOR_WHITE}
                size="large"
                style={{ flex: 1, justifyContent: 'flex-start' }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.COLOR_BLUE,
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    },
});
export default SplashView;