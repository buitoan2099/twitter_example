import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Avatar, IconButton, TouchableRipple } from "react-native-paper"
import * as store from "../stores"
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


export function CustomerComp({ item, index }: { item: any, index: number }) {

    return (
        <View key={item.id} style={{
            flexDirection: 'row', elevation: 5,
            backgroundColor: 'white', borderRadius: 5, margin: 5, alignItems: 'flex-start',
        }}>
            <TouchableRipple
                rippleColor="rgba(0, 0, 0, 0.2)"
                style={{ flex: 1, borderRadius: 5, paddingVertical: 5, }}
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
                                    {item.id ?? ""}
                                </Text>
                            </View>

                        </View>
                        <Text numberOfLines={2} style={[TextStyles.Context,]}>
                            {item.username ?? ""}
                        </Text>
                    </View>
                </View>
            </TouchableRipple>

        </View>
    )
}

export function UserItemComp({ item, index, fun, funRemove }: { item: any, index: number, fun: Function, funRemove: Function }) {
    return (
        <View key={item.id} style={{
            flexDirection: 'row', elevation: 5,
            backgroundColor: 'white', borderRadius: 5, margin: 5, alignItems: 'flex-start',
        }}>
            <TouchableRipple
                rippleColor="rgba(0, 0, 0, 0.2)"
                style={{ flex: 1, borderRadius: 5, paddingVertical: 5, }}
                onPress={() => { fun(item) }}
            >
                <View style={{ flexDirection: 'row', flex: 1, borderRadius: 5, }}>
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
                                    {item.id ?? ""}
                                </Text>
                            </View>

                        </View>
                        <Text numberOfLines={2} style={[TextStyles.Context,]}>
                            {item.username ?? ""}
                        </Text>
                    </View>
                    <View>
                        <View
                            style={{
                                flex: 1,
                                width: 25,
                                height: 25,
                                marginBottom: 5,
                                borderRadius: 50,
                                backgroundColor: Colors.COLOR_GREEN,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <Text style={{ color: '#ffffff' }}>{item.addFollows ? item.addFollows!.length : 0}</Text>
                        </View>
                        <View
                            style={{
                                width: 25,
                                flex: 1,
                                height: 25,
                                borderRadius: 50,
                                backgroundColor: Colors.COLOR_RED,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <Text style={{ color: '#ffffff' }}>{item.unFollows ? item.unFollows!.length : 0}</Text>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center', paddingHorizontal: 10, }}>
                        <IconButton
                            icon="trash-can-outline"
                            size={25} color={Colors.COLOR_BLUE}
                            style={{ margin: 1 }}
                            onPress={() => funRemove()}
                        />
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