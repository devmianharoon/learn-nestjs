import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { User } from "./data/user.dto";

const USER = []

@Controller('user')
@ApiTags('user')
export class UserController{

    @Post('/add')
    addUser(@Body()createUser : User){
        USER.push(createUser)
        return 'User Added Sucessfuly'
    }
    @Get('/users')
    getAllUsers(){
        return USER
    }
    @Get('/id')
    getUserid(@Param('id') id : number){
        return USER.find((user)=>user.id === +id)
    }

}