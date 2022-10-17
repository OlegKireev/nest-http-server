import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UserModel } from 'user/user.model';
import { RoleModel } from 'role/role.model';
import { UserRoleModel } from 'user-role/user-role.model';
import { UserModule } from 'user/user.module';
import { RoleModule } from 'role/role.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'development' ? '.development.env' : '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [UserModel, RoleModel, UserRoleModel],
      autoLoadModels: true,
    }),
    UserModule,
    RoleModule,
    AuthModule,
  ],
})
export class AppModule {}
