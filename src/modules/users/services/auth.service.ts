import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/database/entities/user.entity";
import { FindOptionsWhere, Repository } from "typeorm";
import { RegisterUserDto } from "../dto/register-user.dto";
import { BadRequestException } from "@nestjs/common";

export class AuthService{
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>
    ){}

    async register(registerUser:RegisterUserDto){
        const isExist = await this.userRepository.existsBy({
            username: registerUser.username
        })

        if(isExist){
            throw new BadRequestException('User already exists')
        } else{
            const user=this.userRepository.create(registerUser)
            return await this.userRepository.save(user)
            }
        }

        async signIn(username: string, password: string){
            const user = await this.userRepository.findOne({
                where: { username } ,
                select: ['user_id', 'password'],
            });
    
            if(!user){
                throw new BadRequestException('Invalid email or password');
            }
            if (user.password !== password) {
                throw new BadRequestException('Invalid email or password');
            }
            const { password: _, ...result } = user;
            return result;
        }
    }
