import React, { useEffect, useState } from "react";
import { Keyboard, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import { TextStyles } from "../styles/textStyles";
import { Colors } from "../values/colors";
import * as store from "../stores"
import { observer } from "mobx-react";
import { UserItemComp } from "../components/userCom";
import userStore from "../stores/userStore";
import { useBaseFunction } from "../hook/baseHook";


const UsersView = observer(
    ({ navigation }: { navigation: any }) => {
        const [data, setData] = useState(() => {
            return {
                name: '',
                loading: false,
                error: '',
            }
        });
        const { showLoadingBar } = useBaseFunction();
        useEffect(() => {
            // const data = navigation.getParam();
            // userStore.init()
        }, [])
        console.log(userStore.usersFilter.length)
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{
                    width: '100%', flexDirection: 'row', paddingVertical: 10, paddingLeft: 10,
                    alignItems: 'center', justifyContent: 'center',
                }}>
                    <TextInput
                        label="Tìm kiếm người dùng..."
                        value={data.name}
                        style={{ height: 60, flex: 1 }}
                        onChangeText={(text) => {
                            setData({ ...data, name: text, })
                        }}
                        mode='outlined'
                        left={<TextInput.Icon
                            name={"file-search-outline"}
                            style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 5 }}
                        />}
                        // onEndEditing={() => { }}
                        onEndEditing={() => userStore.searchUsers(data.name)}
                    />
                    <IconButton
                        icon="plus-circle"
                        size={40} color={Colors.COLOR_BLUE}
                        style={{ margin: 1 }}
                        onPress={async () => {
                            Keyboard.dismiss()
                            let value = await userStore.addUser(data.name)
                            if (value) {
                                setData({ ...data, name: "", })
                            }
                        }}
                    />

                </View>
                <View style={{ flex: 1, backgroundColor: Colors.COLOR_WHITE }}>
                    <ScrollView refreshControl={
                        <RefreshControl
                            refreshing={false}
                            colors={[Colors.COLOR_BLUE]}
                            onRefresh={() => { userStore.refreshData() }}
                        />
                    }>
                        <View style={{ flex: 1, }}>
                            {
                                (userStore.usersFilter.length === 0)
                                    ? <View style={{ width: '100%', alignItems: 'center', }}>
                                        <Text style={TextStyles.Context}>
                                            Infos that you need is empty
                                        </Text>
                                    </View>
                                    :
                                    userStore.usersFilter.map((item) => {
                                        console.log(item)
                                        return UserItemComp({
                                            item: item, index: 0,
                                            fun: () => {
                                                console.log("add");
                                                Keyboard.dismiss(),
                                                    userStore.clickUser({ navigation: navigation, user: item })
                                            },
                                            funRemove: () => {
                                                console.log("remove")
                                                Keyboard.dismiss()
                                                userStore.removeUser(item)
                                            },
                                        })
                                    })
                            }

                        </View>
                    </ScrollView>
                </View>
                {showLoadingBar(userStore.isLoading)}
            </View>

        );
    }
)

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
export default UsersView;