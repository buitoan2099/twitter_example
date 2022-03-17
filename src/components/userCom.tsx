import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Avatar, TouchableRipple } from "react-native-paper"
import { indexStore } from "../stores"
import { TextStyles } from "../styles/textStyles"
import { Colors } from "../values/colors"

export function UserComp({ item, index }: { item: any, index: number }) {

    return (
        <View key={item.id} style={{
            flexDirection: 'row', height: 100, elevation: 5,
            backgroundColor: 'white', borderRadius: 5, margin: 5, alignItems: 'flex-start',
        }}>
            <TouchableRipple
                rippleColor="rgba(0, 0, 0, 0.2)"
                style={{ flex: 1, borderRadius: 5, }}
                onPress={() => { }}
            >
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ marginHorizontal: 5, paddingVertical: 10, paddingHorizontal: 5 }}>

                        <Avatar.Image size={50} source={{ uri: item.avatar ?? "https://ragus.vn/wp-content/uploads/2019/11/dien-vien-nhat-ban-Kanna-Hashimoto.jpg" }} />
                    </View>
                    <View style={{ paddingRight: 5, flex: 1, paddingTop: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flex: 1, paddingRight: 10 }}>
                                <Text numberOfLines={1} style={[TextStyles.ContextBold,]}>
                                    {item.name ?? ""}
                                </Text>
                                <Text numberOfLines={1} style={[TextStyles.ContextGray,]}>
                                    {item.contact ?? ""}
                                </Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={style.button}
                                onPress={() => {
                                    console.log("dddddd");
                                    // !item.isFollow
                                    //     ? indexStore.list.follow(item)
                                    //     : indexStore.list.unfollow(item)
                                }}
                            >
                                <Text style={{
                                    fontSize: 16, color: Colors.COLOR_WHITE, fontWeight: 'bold',
                                }}>
                                    {!item.isFollow ? 'Follow' : 'Unfollow'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Text numberOfLines={2} style={[TextStyles.Context,]}>
                            {item.description ?? ""}
                        </Text>
                    </View>
                </View>
            </TouchableRipple>

        </View>


    )
}
const style = StyleSheet.create({
    background: {
        elevation: 10, width: 300, height: 450, backgroundColor: 'white',
        borderRadius: 24, alignItems: 'center', padding: 20, marginTop: 180, marginBottom: 20
    },
    button: {
        elevation: 5, backgroundColor: Colors.COLOR_BLACK, justifyContent: 'center',
        borderRadius: 24, alignItems: 'center', marginVertical: 5, paddingHorizontal: 50
    },
    title: {
        alignItems: 'center', backgroundColor: Colors.COLOR_LIGHT_GRAY, borderRadius: 24,
        justifyContent: 'center', paddingBottom: 2
    }
});