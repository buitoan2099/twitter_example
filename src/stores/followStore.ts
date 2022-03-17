import { makeAutoObservable, runInAction, values } from 'mobx';
import React from 'react';
import { Platform, ToastAndroid } from 'react-native';
import { indexStore } from '.';
import { User } from '../models/user';
import { UserRepository } from '../repositories/userRepository';
import StorageUtil from '../utils/storageUtil';
import { Users } from '../utils/users';
import Utils from '../utils/utils';

export class FollowStore {
    followList: User[] = []; //follow list created in toan
    userList: User[] = Users;//user list created in toan
    followApiList: User[] = [];//follow list from twitter user
    timer: any = React.createRef(); //timer to set overtime
    private userRepo = UserRepository.getInstance();
    isCreacte: boolean = true;
    key = "1";
    constructor() {
        makeAutoObservable(this);
    }

    ///get initvalue from storage or utils and get api follow list by id
    async getInitValue(key: string) {
        this.key = key;
        let value = await StorageUtil.getValue(key)
        await this.getApiFollowList()
        console.log('home')
        console.log(key)
        if (value !== null) {
            runInAction(() => {
                this.followList = value.followList
                this.userList = value.userList
            });
        }
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
        await this.userRepo.getFollowList(this.key).then(res => {
            console.log("this.key");
            console.log(this.key);

            if (res["data"]) {
                console.log(res["data"]);
                let oldValue = this.followApiList;
                let name = indexStore.user.key?.name;
                runInAction(() => {
                    this.followApiList = res["data"];
                });
                if (this.isCreacte) {
                    this.isCreacte = false
                } else if (oldValue.length < this.followApiList.length) {
                    Utils.notifyMessage(name + " has followed some users")
                } else if (oldValue.length > this.followApiList.length) {
                    Utils.notifyMessage(name + " has unfollowed some users")
                }
            }
        })
            .catch(error => {
            })
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
