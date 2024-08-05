import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UsersService } from "../services/users.service";
import { User } from "../dto/users.dto";

@ApiTags('user')
@Controller()
export class UsersController{
    constructor(private UserService : UsersService){}

    @Post('/add')
    addUser(@Body() user :User){
        return this.UserService.addUser(user)
    }
    @Get('/get')
    getUsers(){
        return this.getUsers()
    }
    @Get('/id')
    getUserid(@Param('id')id:number){
        return this.UserService.getUserId(+id)
    }


}