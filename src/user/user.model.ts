import {
  Model,
  Column,
  DataType,
  Table,
  BelongsToMany,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { RoleModel } from 'role/role.model';
import { UserRoleModel } from 'user-role/user-role.model';

interface UserCreationAttrs {
  username: string;
  password: string;
}

@Table({ tableName: 'users' })
export class UserModel extends Model<UserModel, UserCreationAttrs> {
  @ApiProperty({
    example: 1,
    description: 'Уникальный идентификатор пользователя',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'user@yandex.ru',
    description: 'Почта пользователя, она же является логином',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: 'qwert12345',
    description: 'Зашифрованный пароль пользователя',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({
    example: false,
    description: 'Флаг заблокирован ли пользователь',
  })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isBanned: boolean;

  @ApiProperty({
    example: 'Спам',
    description: 'Причина блокировки пользователя',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @BelongsToMany(() => RoleModel, () => UserRoleModel)
  roles: RoleModel[];
}
