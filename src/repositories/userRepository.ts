import { User } from '../models/user/user';
import ApiUtil from '../utils/apiUtil';
import { ApiRepository } from './apiRepository';
import React from 'react';

class UserRepository extends ApiRepository {
  private static classInstance?: UserRepository; // Class instance
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new UserRepository();
    }
    return this.classInstance;
  }

  /// Get user by username
  getUserByUserName = (userName: string) => {
    console.log(userName);
    return this.instance.get('/users/by/username/' + userName, ApiUtil.getHeader())
  }

  /// Get user by id
  getUserById = (userId: string) => {
    console.log(userId);
    return this.instance.get('/users/' + userId, ApiUtil.getHeader())
  }
}
const userRepository = UserRepository.getInstance();
export default userRepository;
export { UserRepository };