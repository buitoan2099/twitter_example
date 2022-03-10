import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Colors } from "../../values/colors"
import React from "react"
import { Routes } from "../../navigation/routes"
import { indexStore } from "../../stores"

export const TabFourView = ({ navigation }: { navigation: any }) => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.COLOR_WHITE, justifyContent: 'center' }}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={style.button}
                onPress={() => {
                    indexStore.user.logout({ navigation: navigation })


                }}
            >
                <Text style={{
                    fontSize: 16, color: Colors.COLOR_WHITE, fontWeight: 'bold',
                }}>
                    LOG OUT
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({

    button: {
        elevation: 5, backgroundColor: Colors.COLOR_BLACK, justifyContent: 'center',
        borderRadius: 24, alignItems: 'center', marginHorizontal: 50, padding: 30
    },

});