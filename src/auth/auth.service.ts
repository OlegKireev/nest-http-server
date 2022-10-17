import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'user/dto/create-user-dto';
import { UserModel } from 'user/user.model';
import { UserService } from 'user/user.service';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcryptjs';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(dto: CreateUserDto) {
    console.log('');
  }

  async registration(dto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(dto.email);

    if (candidate) {
      throw new HttpException(
        'Пользователь с тамим e-mail уже зарегистрирован',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = await hash(dto.password, 5);

    const user = await this.userService.createUser({
      ...dto,
      password: hashedPassword,
    });
    return this.generateToken(user);
  }

  async generateToken(user: UserModel) {
    const payload = {
      email: user.email,
      id: user.id,
      roles: user.roles,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
