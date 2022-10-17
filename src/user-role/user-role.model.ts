import {
  Model,
  Column,
  DataType,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { UserModel } from 'user/user.model';
import { RoleModel } from 'role/role.model';

@Table({ tableName: 'user_role', createdAt: false, updatedAt: false })
export class UserRoleModel extends Model<UserRoleModel> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => RoleModel)
  @Column({
    type: DataType.NUMBER,
  })
  roleId: number;

  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.NUMBER,
  })
  userId: number;
}
