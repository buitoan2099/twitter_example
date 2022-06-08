import React from "react";
import {
    ActivityIndicator,
} from 'react-native';
import { Colors } from "../values/colors";
import { Constants } from "../values/constants";

export function BaseView() {
    /**
     * Show loading bar
     * @param {*} isShow
     */
    function showLoadingBar(isShow: boolean = false) {
        return isShow ? (
            <ActivityIndicator
                style={{
                    position: 'absolute',
                    top: (Constants.WINDOW_HEIGTH - 200) / 2,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
                color={Colors.COLOR_BLUE}
            ></ActivityIndicator>
        ) : null;
    }

}

