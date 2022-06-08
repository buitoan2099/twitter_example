import { makeAutoObservable, runInAction } from "mobx";
// import store from './index';
import * as repository from '../repositories/index';
import StorageUtil from "../utils/storageUtil";
import { checkIncreaseType, ValueType } from "../enums/valueType";
import { User } from "../models/user/user";
import { Routes } from "../navigation/routes";
import React from "react";
import Utils from "../utils/utils";

export class UserStore {
    // users: User[] = [
    //     {
    //         "id": "1432365610596388812",
    //         "name": "Toàn Bùi Văn",
    //         "username": "TonBiVn1",
    //     },
    // ];         //list user 
    // usersFilter: User[] = [
    //     {
    //         "id": "1432365610596388870",
    //         "name": "Toàn Bùi Văn",
    //         "username": "TonBiVn1"
    //     },
    //     {
    //         "id": "1432365610596388871",
    //         "name": "Toàn Bùi Văn",
    //         "username": "TonBiVn1",
    //     },
    //     {
    //         "id": "1432365610596388872",
    //         "name": "Toàn Bùi Văn",
    //         "username": "TonBiVn1",
    //     },
    //     {
    //         "id": "1432365610596388873",
    //         "name": "Toàn Bùi Văn",
    //         "username": "TonBiVn1",
    //     },
    //     {
    //         "id": "1432365610596388874",
    //         "name": "Toàn Bùi Văn",
    //         "username": "TonBiVn1",
    //     },
    //     {
    //         "id": "1432365610596388875",
    //         "name": "Toàn Bùi Văn",
    //         "username": "TonBiVn1",
    //     },
    //     {
    //         "id": "1432365610596388876",
    //         "name": "Toàn Bùi Văn",
    //         "username": "TonBiVn1",
    //     },
    //     {
    //         "id": "1432365610596388877",
    //         "name": "Toàn Bùi Văn",
    //         "username": "TonBiVn1",
    //     },
    //     {
    //         "id": "1432365610596388878",
    //         "name": "Toàn Bùi Văn",
    //         "username": "TonBiVn1",
    //     },
    //     {
    //         "id": "1432365610596388879",
    //         "name": "Toàn Bùi Văn",
    //         "username": "TonBiVn1",
    //     },
    // ];   //list user are showed ()
    users: User[] = [];         //list user 
    usersFilter: User[] = [];   //list user are showed ()
    timer: any = React.createRef(); //timer to set overtime
    isLoading: boolean = false

    constructor() {
        makeAutoObservable(this);
    }

    ///get api follow list by id overtime
    getApiFollowListOverTime = async () => {
        this.timer.current = setInterval(async () => await this.getUsers(this.users), 30000)
    }

    ///destroy value timer 
    destroyOverTime = async () => {
        clearInterval(this.timer.current);
    }

    ///will get initvalue from storage if it has
    async init() {
        let value: any;
        // value = await StorageUtil.getValue(ValueType.users)
        console.log(value)
        console.log("value")
        if (value !== null) {
            await this.getUsers(value)
        }
    }

    ///check follow list of a user
    checkFollowsUser = ({ navigation, user }: { navigation: any, user: User }) => {
        navigation.navigation(Routes.HOME, { data: user });
    }

    ///search users
    searchUsers(searchString: string) {
        console.log("fffff")
        // this.usersFilter = this.users.filter(item => {
        //     if (item.username!.lastIndexOf(searchString) == -1) {
        //         return false;
        //     }
        //     return true;
        // });
    }

    ///add a user
    async addUser(userInfo: string,) {
        let value = await StorageUtil.getValue(ValueType.users)
        let resp: any;
        if (userInfo != "") {
            runInAction(() => {
                this.isLoading = true
            })
            await repository.userRepository.getUserByUserName(userInfo).then(async res => {
                console.log(res);
                if (res["data"]) {
                    resp = res["data"];
                } else {
                    await repository.userRepository.getUserById(userInfo).then(res => {
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
            if (resp) {
                const findItem = this.users.find(item => {
                    return item.id! == resp.id;
                });

                if (findItem) {
                    runInAction(() => {
                        this.isLoading = false
                    })
                    Utils.notifyMessage("This user already exists in the list")
                    return false;
                } else {
                    let val = await this.getUser(resp.id!, resp, true);
                    runInAction(() => {
                        this.isLoading = false
                        this.users.push(val);
                        this.usersFilter = this.users;
                    })
                    await StorageUtil.setValue(ValueType.users, this.users)
                    let value = await StorageUtil.getValue(ValueType.users)
                    return true;
                }
            }
        }

    }

    ///Remove a user
    removeUser(user: User) {
        this.users = this.users.filter(item => item.id !== user.id);
        this.usersFilter = this.users
        StorageUtil.setValue(ValueType.users, this.users)
    }

    ///refresh
    refreshData() {
        this.getUsers(this.usersFilter)
    }

    ///Get Users
    async getUsers(oldValue: User[]) {
        let data: User[] = [];
        runInAction(() => {
            this.isLoading = true
        })
        for (let i = 0; i < oldValue.length; i++) {
            let val = await this.getUser(oldValue[i].id!, oldValue[i]);
            data.push(val);
        }
        runInAction(() => {
            this.isLoading = false
            this.users = data;
            this.usersFilter = this.users;
        });
        await StorageUtil.setValue(ValueType.users, this.users)
    }

    ///check User
    checkUser(oldValue: User, newFollowList: any) {
        let result: User = {};
        let newFollows: User[] = newFollowList ?? []
        let oldFollows: User[] = oldValue.follows ?? []
        result.addFollows = newFollows.filter((val) => {
            const findItem = oldFollows.find(item => item.id === val.id);
            if (findItem) {
                return false;
            } else {
                return true;
            }
        });
        result.unFollows = oldFollows.filter((val: User) => {
            const findItem = newFollows.find(item => item.id === val.id);
            if (findItem) {
                return false;
            } else {
                return true;
            }
        })
        return result
    }

    ///Get a User
    getUser = async (userId: string, oldValue: User, isAdd: boolean = false) => {
        let userInfo: User = {};
        console.log("oldValue")

        console.log(oldValue)
        await repository.userRepository.getUserById(userId.toString()).then(user => {
            if (user["data"]) {
                userInfo = user["data"];
            }
        })
            .catch(error => {
                console.log(error);
            })
        await repository.followRepository.getFollowList(userId.toString()).then(async res => {
            if (res["data"]) {
                let checkUser: User = { unFollows: [], addFollows: [] };
                if (!isAdd) {
                    checkUser = await this.checkUser(oldValue, res["data"])
                }
                console.log("checkUser.addFollows");
                console.log(res["data"]);
                userInfo = {
                    ...userInfo,
                    follows: res["data"],
                    unFollows: checkUser.unFollows,
                    addFollows: checkUser.addFollows,
                }

            }
        })
            .catch(error => {
            })

        console.log("value.addFollows");

        return userInfo;
    }

    clickUser({ navigation, user }: { navigation: any, user: User }) {
        navigation.navigate(Routes.HOME, { user: user });
    }
}
export default new UserStore();
