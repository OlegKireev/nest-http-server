import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role-dto';
import { RoleModel } from './role.model';
import { RoleService } from './role.service';

@ApiTags('Роли')
@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @ApiOperation({ summary: 'Создание новой роли' })
  @ApiResponse({ status: 200, type: RoleModel })
  @Post()
  async createRole(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({
    summary: 'Получение роли по полю value',
    parameters: [
      {
        required: true,
        name: 'value',
        in: 'path',
        example: 'ADMIN',
        allowEmptyValue: false,
      },
    ],
  })
  @ApiResponse({ status: 200, type: RoleModel })
  @Get('/:value')
  async getRoleByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
