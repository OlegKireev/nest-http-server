import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role-dto';
import { RoleModel } from './role.model';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(RoleModel) private roleRepository: typeof RoleModel,
  ) {}

  async createRole(dto: CreateRoleDto) {
    const upperCasedValue = {
      ...dto,
      value: dto.value.toUpperCase(),
    };
    const role = await this.roleRepository.create(upperCasedValue);
    return role;
  }

  async getRoleByValue(value: string) {
    const upperCassedValue = value.toUpperCase();
    const role = await this.roleRepository.findOne({
      where: { value: upperCassedValue },
    });
    return role;
  }
}
