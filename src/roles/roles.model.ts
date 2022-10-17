import { Model, Column, DataType, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface RolesCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class RoleModel extends Model<RoleModel, RolesCreationAttrs> {
  @ApiProperty({
    example: 1,
    description: 'Уникальный идентификатор роли',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'ADMIN',
    description: 'Уникальное значение роли пользователя',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  value: string;

  @ApiProperty({
    example: 'Администратор',
    description: 'Текстовое описание роли',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;
}
