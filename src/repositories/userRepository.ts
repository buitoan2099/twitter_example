
// import ApiResponse from 'models/apiResponse';
import { User } from '../models/user';
import { headerGetBearerToken } from '../utils/headerUtil';
import { ApiRepository } from './apiRepository';
import React from 'react';

export class UserRepository extends ApiRepository {
  private static classInstance?: UserRepository; // Class instance
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new UserRepository();
    }
    return this.classInstance;
  }

  /// Get user by username
  getUserByUserName = (userName: string) => {
    return this.instance.get('/users/by/username/' + userName, headerGetBearerToken())
  }
  /// Get user by id
  getUserById = (userId: string) => {
    return this.instance.get('/users/' + userId, headerGetBearerToken())
  }
  /// Get Follow list;
  getFollowList = (userId: string) => {
    return this.instance.get('/users/' + userId + "/following", headerGetBearerToken())
  }
}