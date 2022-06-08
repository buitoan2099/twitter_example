import axios from 'axios';
import { makeAutoObservable, runInAction, values } from 'mobx';
import React from 'react';
import { Platform, ToastAndroid } from 'react-native';
// import store from './index';
import * as repository from '../repositories/index';
import { User, Customer } from '../models/user/user';
import StorageUtil from '../utils/storageUtil';
import { Users } from '../utils/users';
import Utils from '../utils/utils';
import userStore from './userStore';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

export class FollowUserStore {
    followList: User[] = []; //follow list
    addfollowList: User[] = [];//follow list add
    unfollowList: User[] = [];//unfollow list 
    isLoading: boolean = false
    user: User = {};
    constructor() {
        makeAutoObservable(this);
    }

    // //reset
    // reset() {
    //     this.followList = [];
    //     this.userList = Users;
    //     this.followApiList = [];
    //     this.destroyOverTime;
    // }

    ///get initvalue from storage or utils and get api follow list by id
    async getInitValue(user: User) {
        this.user = user;
        console.log("user.follows")
        this.followList = user.follows ?? [];
        this.addfollowList = user.addFollows ?? [];
        this.unfollowList = user.unFollows ?? [];
    }

    ///refresh
    async refreshData() {
        console.log("refe")
        runInAction(() => {
            this.isLoading = true
        })
        let value = await this.getUser()
        runInAction(() => {
            this.user = value
            this.followList = this.user.follows ?? [];
            this.addfollowList = this.user.addFollows ?? [];
            this.unfollowList = this.user.unFollows ?? [];
            this.isLoading = false
            userStore.usersFilter = userStore.usersFilter.map((item: User) => {
                if (item.id === this.user.id) {
                    return this.user;
                }
                return item
            })
        })
        console.log("okkkkk")
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
    getUser = async () => {
        let userInfo: User = {};
        console.log("oldValue")
        await repository.userRepository.getUserById(this.user.id ?? "").then(user => {
            if (user["data"]) {
                userInfo = user["data"];
            }
        })
            .catch(error => {
                console.log(error);
            })
        await repository.followRepository.getFollowList(this.user.id ?? "").then(async res => {
            if (res["data"]) {
                let checkUser: User = { unFollows: [], addFollows: [] };
                checkUser = await this.checkUser(this.user, res["data"])
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

}

export default new FollowUserStore();
