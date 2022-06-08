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

export class FollowStore {
    followList: User[] = []; //follow list created in toan
    userList: User[] = Users;//user list created in toan
    followApiList: Customer[] = [];//follow list from twitter user
    timer: any = React.createRef(); //timer to set overtime
    isCreacte: boolean = true;
    user: User = {};
    key = "1";
    constructor() {
        makeAutoObservable(this);
    }

    //reset
    reset() {
        this.followList = [];
        this.userList = Users;
        this.followApiList = [];
        this.destroyOverTime;
    }

    ///get initvalue from storage or utils and get api follow list by id
    async getInitValue(user: any) {
        this.user = user;
        await this.getApiFollowList()
        console.log('home')

    }

    ///get api follow list by id overtime
    getApiFollowListOverTime = async () => {
        this.timer.current = setInterval(async () => await this.getApiFollowList(), 30000)
    }

    ///destroy value timer 
    destroyOverTime = async () => {
        clearInterval(this.timer.current);
    }

    ///get api follow list by id
    async getApiFollowList() {
        // runInAction(() => {
        //     this.followApiList = [];
        // });
        // Utils.notifyMessage("update follow list")

        await repository.followRepository.getFollowList(this.user.id!.toString()).then(res => {
            if (res["data"]) {
                console.log(res["data"]);
                let oldValue = this.followApiList;
                runInAction(() => {
                    this.followApiList = res["data"];
                });
                if (this.isCreacte) {
                    this.isCreacte = false
                } else if (oldValue.length < this.followApiList.length) {
                    Utils.notifyMessage(this.user.name + " has followed some users")
                } else if (oldValue.length > this.followApiList.length) {
                    Utils.notifyMessage(this.user.name + " has unfollowed some users")
                }
            }
        })
            .catch(error => {
            })


        // await repository.customersRepo.getCustomersByID().then(res => {
        //     console.log("customer");
        //     console.log(res);

        //     if (res) {
        //         console.log(res);
        //         let oldValue = this.followApiList;
        //         let name = store.loginStore.key?.name;
        //         runInAction(() => {
        //             this.followApiList = res as unknown as Customer[];
        //         });
        //         if (this.isCreacte) {
        //             this.isCreacte = false
        //         } else if (oldValue.length < this.followApiList.length) {
        //             Utils.notifyMessage(name + " has followed some users")
        //         } else if (oldValue.length > this.followApiList.length) {
        //             Utils.notifyMessage(name + " has unfollowed some users")
        //         }
        //     }
        // })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }

    ///follow other users
    follow(user: User) {
        this.followList = [...this.followList, user];
        this.followList = this.followList;
        const findItem = this.userList.find(item => item.id === user.id);
        if (findItem) {
            this.userList = this.userList.map((item: User) => {
                if (item.id === user.id) {
                    item.isFollow = true
                    Utils.notifyMessage("You have followed " + item.name);
                }
                return item
            })
        }
        StorageUtil.setValue(this.key, { followList: this.followList, userList: this.userList })
    }

    ///unfollow other users
    unfollow(user: User) {
        this.followList = this.followList.filter(item => item.id !== user.id);
        const findItem = this.userList.find(item => item.id === user.id);
        if (findItem) {
            this.userList = this.userList.map((item: User) => {
                if (item.id === user.id) {
                    item.isFollow = false
                    Utils.notifyMessage("You have unfollowed " + item.name);
                }
                return item
            })
        }
        StorageUtil.setValue(this.key, { followList: this.followList, userList: this.userList })
    }


}

export default new FollowStore();
