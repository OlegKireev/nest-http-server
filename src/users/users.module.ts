import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UserModel } from './users.model';
import { UsersService } from './users.service';
import { RoleModel } from 'roles/roles.model';
import { UserRoleModel } from 'user-roles/user-roles.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([UserModel, RoleModel, UserRoleModel])],
})
export class UsersModule {}
