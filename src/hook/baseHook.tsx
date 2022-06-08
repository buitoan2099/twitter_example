import React from "react";
import { ActivityIndicator, View } from "react-native";
import { Colors } from "../values/colors";
import { Constants } from "../values/constants";

export const useBaseFunction = () => {
    const [filter, setFilter] = React.useState("");
    const [userCollection, setUserCollection] = React.useState([]);

    /**
     * Show loading bar
     * @param {*} isShow
     */
    function showLoadingBar(isShow: boolean = false) {
        return isShow ? (
            <ActivityIndicator
                style={{
                    position: 'absolute',
                    flex: 1,
                    zIndex: 100,
                    width: Constants.WINDOW_WIDTH,
                    height: Constants.WINDOW_HEIGTH,
                    backgroundColor: Colors.COLOR_GRAY,
                    opacity: 0.7,
                }}
                size="large"
                color={Colors.COLOR_BLUE}
            ></ActivityIndicator>
        ) : null;
    }
    return { userCollection, showLoadingBar, filter, setFilter };
};

