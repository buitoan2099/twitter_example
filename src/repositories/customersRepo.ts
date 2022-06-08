import { ApiRepoDB } from "./apiRepoDB";

class CustomersRepo extends ApiRepoDB {
    private static classInstance?: CustomersRepo; // Class instance
    static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new CustomersRepo();
        }
        return this.classInstance;
    }
    /// Get user by username
    getCustomersByID = () => {
        console.log(this.instance.name);
        return this.instance.get('')
    }
}
const customersRepo = CustomersRepo.getInstance();
export default customersRepo;
export { CustomersRepo };
