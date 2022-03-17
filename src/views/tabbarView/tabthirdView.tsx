import { ScrollView, Text, View } from "react-native"
import { Colors } from "../../values/colors"
import React from "react"
import { indexStore } from "../../stores";
import { UserComp } from "../../components/userCom";
import { TextStyles } from "../../styles/textStyles";

export const TabThirdView = () => {
    var size = indexStore.list.followList.length;
    console.log(size)
    return (
        <View style={{ flex: 1, backgroundColor: Colors.COLOR_WHITE }}>
            <ScrollView>
                <View style={{ padding: 10, }}>
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

                            indexStore.list.followList.map((item) => { return UserComp({ item: item, index: 0 }) })
                    }

                </View>
            </ScrollView>
        </View>
    )
}