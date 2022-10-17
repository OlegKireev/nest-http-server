import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RoleModel } from './role.model';
import { UserModel } from 'user/user.model';

@Module({
  providers: [RoleService],
  controllers: [RoleController],
  imports: [SequelizeModule.forFeature([RoleModel, UserModel])],
  exports: [RoleService],
})
export class RoleModule {}
