import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role-dto';
import { RoleModel } from './roles.model';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(RoleModel) private rolesRepository: typeof RoleModel,
  ) {}

  async createRole(dto: CreateRoleDto) {
    const upperCasedValue = {
      ...dto,
      value: dto.value.toUpperCase(),
    };
    const role = await this.rolesRepository.create(upperCasedValue);
    return role;
  }

  async getRoleByValue(value: string) {
    const upperCassedValue = value.toUpperCase();
    const role = await this.rolesRepository.findOne({
      where: { value: upperCassedValue },
    });
    return role;
  }
}
