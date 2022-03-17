import { makeAutoObservable, runInAction } from "mobx";
import { indexStore } from ".";
import { User } from "../models/user";
import { Routes } from "../navigation/routes";
import { UserRepository } from "../repositories/userRepository";
import StorageUtil from "../utils/storageUtil";
import Utils from "../utils/utils";

export class LoginStore {
    key?: User;
    private userRepo = UserRepository.getInstance();

    constructor() {
        makeAutoObservable(this);
    }
    ///will get initvalue from storage if it has
    async getInitUser(navigation: any,) {
        let value: any;
        value = await StorageUtil.getUser()

        if (value !== null) {
            runInAction(() => {
                this.key = value
            });
            await indexStore.list.getInitValue(value["id"])
            navigation.replace(Routes.HOME,);
        } else {
            navigation.replace(
                Routes.LOGIN,
            );
        }
    }

    async login({ navigation, user }: { navigation: any, user: string }) {
        let resp: any;
        if (user != "") {
            console.log("login")
            console.log(user)
            await this.userRepo.getUserByUserName(user).then(res => {
                console.log(res);
                if (res["data"]) {
                    resp = res["data"];
                } else {
                    this.userRepo.getUserById(user).then(res => {
                        if (res["data"]) {
                            resp = res["data"];
                        } else {
                            Utils.notifyMessage("User does not exist")
                        }
                    })
                        .catch(error => {
                            Utils.notifyMessage("User does not exist")
                        })
                }
            })
                .catch(error => {
                    console.log(error);
                })
            console.log(resp);
            if (resp) {
                this.key = resp
                Utils.notifyMessage("Welcome " + resp["name"])
                await StorageUtil.setUser(resp)
                await indexStore.list.getInitValue(resp["id"])
                navigation.replace(Routes.HOME);
            }
        }
    }
    async logout({ navigation }: { navigation: any, }) {
        await StorageUtil.removeUser();
        indexStore.resetFollowStore();
        navigation.replace(Routes.LOGIN);
    }
}
