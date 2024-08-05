import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "../dto/users.dto";

export interface SuccessMessage {
    Message: string;
  }

@Injectable()
export class UsersService{
    public Users :User[] = []


    // add User 
    addUser(usersData : User):SuccessMessage{
        this.Users.push(usersData)
        return {
            "Message" : "User Is Added Sucessfully"
        }
    }
    // get user
    getUsers():User[] {
        return this.Users
    }

    // get user by id
    getUserId(id : number){
        const user = this.Users.find((user)=> user.id === id)
        if (!user) {
            throw new NotFoundException('Book not found');
          }
          return user;
    }
}