import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { RoleModel } from './roles.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [SequelizeModule.forFeature([RoleModel])],
})
export class RolesModule {}
