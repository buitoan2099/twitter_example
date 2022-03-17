import { useContext, createContext } from "react";
import { FollowStore } from "./followStore";
import { LoginStore } from "./loginStore";

export class IndexStore {
    list: FollowStore;
    user: LoginStore;
    constructor() {
        this.list = new FollowStore();
        this.user = new LoginStore();
    }
    resetFollowStore() {
        this.list.destroyOverTime();
        this.list = new FollowStore();
    }
}

export var indexStore = new IndexStore();

