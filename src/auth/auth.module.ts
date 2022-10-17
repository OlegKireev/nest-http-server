import { Module } from '@nestjs/common';
import { UserModule } from 'user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UserModule,
    JwtModule.register({
      secret: `${process.env.SECRET_JWT_KEY}`,
      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],
})
export class AuthModule {}
