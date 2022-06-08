import { RefreshControl, ScrollView, Text, View } from "react-native"
import { Colors } from "../../values/colors"
import React from "react"
import { CustomerComp, UserComp } from "../../components/userCom";
import { TextStyles } from "../../styles/textStyles";
import followUserStore from "../../stores/followUserStore";
import { observer } from "mobx-react";

export const TabThirdView = observer(() => {

    var size = followUserStore.unfollowList.length;
    console.log(size)
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
                        Unfollows
                    </Text>
                </View>
                <View style={{ flex: 1, }}>
                    {
                        (size === 0)
                            ? <View style={{ width: '100%', alignItems: 'center' }}>
                                <Text style={TextStyles.Context}>
                                    Your unfollowlist is empty
                                </Text>
                            </View>
                            :
                            followUserStore.unfollowList.map((item) => { return CustomerComp({ item: item, index: 0 }) })
                    }

                </View>
            </ScrollView>
        </View>
    )
})