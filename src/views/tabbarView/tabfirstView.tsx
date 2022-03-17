import { FlatList, ScrollView, Text, View } from "react-native"
import { Colors } from "../../values/colors"
import React, { useEffect } from "react"
import { TextStyles } from "../../styles/textStyles"
import { observer } from "mobx-react"
import { indexStore } from "../../stores"
import { UserComp } from "../../components/userCom"
import Utils from "../../utils/utils"


export const TabFirstView = observer(() => {

    useEffect(() => {
        indexStore.list.getApiFollowListOverTime()
    }, [])

    var size = indexStore.list.followApiList.length;
    return (
        <View style={{ flex: 1, backgroundColor: Colors.COLOR_WHITE }}>
            <ScrollView>
                <View style={{ padding: 10, }}>
                    <Text style={TextStyles.TitleBold}>
                        {"Hi " + indexStore.user.key?.name}
                    </Text>
                    <Text style={TextStyles.TitleBold}>
                        Your Followlist
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

                            indexStore.list.followApiList.map((item) => { return UserComp({ item: item, index: 0 }) })
                    }

                </View>
            </ScrollView>
        </View>
    )
})