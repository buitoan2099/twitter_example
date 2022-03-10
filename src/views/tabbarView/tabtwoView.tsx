import { observer } from "mobx-react"
import React from "react"
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView } from "react-native"
import { Avatar, TouchableRipple } from "react-native-paper"
import { UserComp } from "../../components/userCom"
import { indexStore } from "../../stores"
import { TextStyles } from "../../styles/textStyles"
import { Users } from "../../utils/users"
import { Colors } from "../../values/colors"



export const TabTwoView = observer(

    () => {


        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView>
                    <View style={{ padding: 10, }}>
                        <Text style={TextStyles.TitleBold}>
                            Suggestions For You
                        </Text>
                    </View>


                    <View>
                        {indexStore.list.userList.map((item) => { return UserComp({ item: item, index: 0 }) })}

                    </View>
                </ScrollView>
            </View>
        )
    }
)
