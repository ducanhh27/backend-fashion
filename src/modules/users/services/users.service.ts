import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/database/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(User)
        private usersRepository:Repository<User>
    ){}
    findAll(){
        return this.usersRepository.find()
    }

    async update(id:number, password:string,first_name:string,last_name:string){
        const user = await this.usersRepository.findOneBy({
            user_id:id,
        });
        user.password = password;
        user.first_name =first_name;
        user.last_name =last_name;
        
        await this.usersRepository.save(user)
    }

    
}