import React from "react"
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native"
import { Avatar, IconButton, TouchableRipple } from "react-native-paper"
import { TextStyles } from "../styles/textStyles"
import { Users } from "../utils/users"
import { Colors } from "../values/colors"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabFirstView } from "./tabbarView/tabfirstView"
import { TabTwoView } from "./tabbarView/tabtwoView"
import { TabThirdView } from "./tabbarView/tabthirdView"
import { TabFourView } from "./tabbarView/tabfourView"

const Tab = createBottomTabNavigator();


export const HomeView = ({ navigation }: { navigation: any }) => {
    return (
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
                name="Home" component={TabFirstView}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Avatar.Icon size={45} icon={(focused) ? "home" : "home-outline"} color="black" style={{ backgroundColor: 'white' }} />
                        </View>
                    ),

                }}
            />
            <Tab.Screen name="Search" component={TabTwoView}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Avatar.Icon size={40} icon={(focused) ? "magnify-plus" : "magnify"} color="black" style={{ backgroundColor: 'white' }} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Notify" component={TabThirdView}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Avatar.Icon size={40} icon={(focused) ? "bell" : "bell-outline"} color="black" style={{ backgroundColor: 'white' }} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="account" component={TabFourView}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Avatar.Icon size={45} icon={(focused) ? "account" : "account-outline"} color="black" style={{ backgroundColor: 'white' }} />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
