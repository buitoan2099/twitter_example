import { makeAutoObservable, runInAction } from "mobx";
import { indexStore } from ".";
import { Routes } from "../navigation/routes";
import StorageUtil from "../utils/storageUtil";

export class LoginStore {
    key: string = "";
    constructor() {
        makeAutoObservable(this);
    }

    ///will get initvalue from storage if it has
    async getInitUser(navigation: any,) {
        let value = await StorageUtil.getUser()

        if (value !== null) {
            runInAction(() => {
                this.key = value
            });
            await indexStore.list.getInitValue(value)

            navigation.replace(
                Routes.HOME,
            );
        } else {
            navigation.replace(
                Routes.LOGIN,
            );
        }
    }

    async login({ navigation, user }: { navigation: any, user: string }) {
        this.key = user
        if (user != "") {
            console.log("login")
            console.log(user)

            await StorageUtil.setUser(user)
            await indexStore.list.getInitValue(user)
            navigation.replace(Routes.HOME);
        }


    }
    async logout({ navigation }: { navigation: any, }) {
        await StorageUtil.removeUser();
        indexStore.newList();
        navigation.replace(Routes.LOGIN);
    }


}
