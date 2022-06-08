import { observer } from "mobx-react"
import React from "react"
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView, RefreshControl } from "react-native"
import { Avatar, TouchableRipple } from "react-native-paper"
import { CustomerComp, UserComp } from "../../components/userCom"
import followUserStore from "../../stores/followUserStore"
import { TextStyles } from "../../styles/textStyles"
import { Users } from "../../utils/users"
import { Colors } from "../../values/colors"



export const TabTwoView = observer(() => {
    var size = followUserStore.addfollowList.length;
    return (
        <View style={{ flex: 1, backgroundColor: Colors.COLOR_WHITE }}>
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={false}
                    colors={[Colors.COLOR_BLUE]}
                    onRefresh={() => { followUserStore.refreshData() }}
                />
            }>
                <View style={{ padding: 10, }}>
                    <Text style={TextStyles.TitleBold}>
                        {"Hi " + followUserStore.user.name + ","}
                    </Text>
                    <Text style={TextStyles.TitleBold}>
                        New Follows
                    </Text>
                </View>
                <View style={{ flex: 1, }}>
                    {
                        (size === 0)
                            ? <View style={{ width: '100%', alignItems: 'center' }}>
                                <Text style={TextStyles.Context}>
                                    You doesn't follows new accounts
                                </Text>
                            </View>
                            :
                            followUserStore.addfollowList.map((item) => { return CustomerComp({ item: item, index: 0 }) })
                    }

                </View>
            </ScrollView>
        </View>
    )
}
)
