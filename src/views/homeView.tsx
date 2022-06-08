import React, { useEffect } from "react"
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native"
import { Avatar, IconButton, TouchableRipple } from "react-native-paper"
import { TextStyles } from "../styles/textStyles"
import { Colors } from "../values/colors"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabFirstView } from "./tabbarView/tabfirstView"
import { TabTwoView } from "./tabbarView/tabtwoView"
import { TabThirdView } from "./tabbarView/tabthirdView"
import followUserStore from "../stores/followUserStore"
import { useBaseFunction } from "../hook/baseHook"
import { observer } from "mobx-react"

const Tab = createBottomTabNavigator();

export const HomeView = observer(({ route, navigation }: { route: any, navigation: any }) => {
    const { showLoadingBar } = useBaseFunction();
    useEffect(() => {
        let { user } = route.params;
        console.log("user")
        followUserStore.getInitValue(user)
        console.log("ffff")
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false, header: () => ( /* Your custom header */
                        <View
                            style={{
                                height: 55,
                                backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',
                                borderBottomWidth: 1, borderBottomColor: Colors.COLOR_LIGHT
                            }}
                        >
                            <IconButton icon="twitter" size={40} color={Colors.COLOR_BLUE} />
                        </View>
                    )
                }}
            >
                <Tab.Screen
                    name="follows" component={TabFirstView}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                                {/* <Avatar.Icon size={45} icon={(focused) ? "home" : "home-outline"} color="black" style={{ backgroundColor: 'white' }} /> */}
                                <Text style={(focused) ? TextStyles.ContextBold : TextStyles.Context}>
                                    {"Follows (" + followUserStore.followList.length + ")"}
                                </Text>
                            </View>
                        ),

                    }}
                />
                <Tab.Screen name="New Follows" component={TabTwoView}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                                {/* <Avatar.Icon size={40} icon={(focused) ? "magnify-plus" : "magnify"} color="black" style={{ backgroundColor: 'white' }} /> */}
                                <Text style={(focused) ? TextStyles.ContextBold : TextStyles.Context}>
                                    {"New Follows (" + followUserStore.addfollowList.length + ")"}
                                </Text>
                            </View>
                        ),
                    }}
                />
                <Tab.Screen name="Unfollows" component={TabThirdView}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                                {/* <Avatar.Icon size={40} icon={(focused) ? "bell" : "bell-outline"} color="black" style={{ backgroundColor: 'white' }} /> */}
                                <Text style={(focused) ? TextStyles.ContextBold : TextStyles.Context}>
                                    {"Unfollows (" + followUserStore.unfollowList.length + ")"}
                                </Text>
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
            {showLoadingBar(followUserStore.isLoading)}
        </View>
    );

})