import { makeAutoObservable, runInAction } from 'mobx';
import { indexStore, } from '.';
import { User } from '../models/user';
import StorageUtil from '../utils/storageUtil';
import { Users } from '../utils/users';

export class FollowStore {
    followList: User[] = [];
    userList: User[] = Users;
    key = "";
    constructor() {
        makeAutoObservable(this);
        // this.getInitValue();
    }

    ///get initvalue from storage or utils
    async getInitValue(key: string) {
        this.key = key;
        let value = await StorageUtil.getValue(key)
        console.log('home')
        console.log(key)
        console.log(this.followList.length)

        if (value !== null) {
            runInAction(() => {
                this.followList = value.followList
                this.userList = value.userList
            });

        }

    }

    follow(user: User) {

        this.followList = [...this.followList, user];

        this.followList = this.followList;
        const findItem = this.userList.find(item => item.id === user.id);
        if (findItem) {
            this.userList = this.userList.map((item: User) => {
                if (item.id === user.id) {
                    item.isFollow = true
                }
                return item
            })
        }
        StorageUtil.setValue(this.key, { followList: this.followList, userList: this.userList })
    }

    unfollow(user: User) {
        this.followList = this.followList.filter(item => item.id !== user.id);
        const findItem = this.userList.find(item => item.id === user.id);
        if (findItem) {
            this.userList = this.userList.map((item: User) => {
                if (item.id === user.id) {
                    item.isFollow = false
                }
                return item
            })
        }
        StorageUtil.setValue(this.key, { followList: this.followList, userList: this.userList })

    }


}
