import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user.controller';
import { UserModel } from './user.model';
import { UserService } from './user.service';
import { RoleModel } from 'role/role.model';
import { RoleModule } from 'role/role.module';
import { UserRoleModel } from 'user-role/user-role.model';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([UserModel, RoleModel, UserRoleModel]),
    RoleModule,
  ],
})
export class UserModule {}
