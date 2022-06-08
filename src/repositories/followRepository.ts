import ApiUtil from "../utils/apiUtil";
import { ApiRepository } from "./apiRepository";

class FollowRepository extends ApiRepository {
    private static classInstance?: FollowRepository; // Class instance
    static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new FollowRepository();
        }
        return this.classInstance;
    }

    /// Get Follow list;
    getFollowList = (userId: string) => {
        return this.instance.get('/users/' + userId + "/following", ApiUtil.getHeader(),)
    }
}
const followRepository = FollowRepository.getInstance();
export default followRepository;
export { FollowRepository };