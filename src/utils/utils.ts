import { ToastAndroid } from "react-native";

export default class Utils {
    static notifyMessage(msg: string) {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
    }
}