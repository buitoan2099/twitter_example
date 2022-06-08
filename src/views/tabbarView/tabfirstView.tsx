import { FlatList, RefreshControl, ScrollView, Text, View } from "react-native"
import { Colors } from "../../values/colors"
import React, { useEffect } from "react"
import { TextStyles } from "../../styles/textStyles"
import { observer } from "mobx-react"
import { CustomerComp, UserComp } from "../../components/userCom"
import Utils from "../../utils/utils"
import followUserStore from "../../stores/followUserStore"
import { useBaseFunction } from "../../hook/baseHook"


export const TabFirstView = observer(() => {

    // useEffect(() => {
    //     store.followStore.getApiFollowListOverTime()
    //     return () => {
    //         store.followStore.destroyOverTime()
    //     }
    // }, [])
    var size = followUserStore.followList.length;
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
                        Your Follows
                    </Text>
                </View>
                <View style={{ flex: 1, }}>
                    {
                        (size === 0)
                            ? <View style={{ width: '100%', alignItems: 'center' }}>
                                <Text style={TextStyles.Context}>
                                    Your Followlist is empty
                                </Text>
                            </View>
                            :
                            followUserStore.followList.map((item) => { return CustomerComp({ item: item, index: 0 }) })
                    }

                </View>
            </ScrollView>
        </View>
    )
})