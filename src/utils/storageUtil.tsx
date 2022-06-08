import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../models/user/user";
export default class StorageUtil {

    /// set value from storage
    static async setValue(key: string, data: any) {
        try {
            let value = await AsyncStorage.setItem(key.toString(), JSON.stringify(data));
            // console.log(value);
            return value;
        } catch (error: any) {
            console.log(error.message);
        }
    }

    /// get value from storage
    static async getValue(key: string) {
        try {
            let data = await AsyncStorage.getItem(key.toString());
            let value = JSON.parse(data as string);
            // console.log(value);
            return value;
        } catch (error: any) {
            console.log(error.message);
        }
        return
    }

    /// remove value
    static async removeValue(key: string) {
        try {
            let Value = await AsyncStorage.removeItem(key);
            return Value;
        } catch (error: any) {
            console.log(error.message);
        }
    }
}