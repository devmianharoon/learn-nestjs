import { User } from "./data/user.dto";
export declare class UserController {
    addUser(createUser: User): string;
    getAllUsers(): any[];
    getUserid(id: number): any;
}
