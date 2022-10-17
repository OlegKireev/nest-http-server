import { Model, Column, DataType, Table } from 'sequelize-typescript';

interface UserCreationAttrs {
  username: string;
  password: string;
}

@Table({ tableName: 'users' })
export class UserModel extends Model<UserModel, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isBanned: boolean;

  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;
}
