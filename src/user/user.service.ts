import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user-dto';
import { UserModel } from './user.model';
import { RoleService } from 'role/role.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel)
    private userRepository: typeof UserModel,
    private roleService: RoleService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();
    return users;
  }
}
