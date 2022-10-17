import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'user/dto/create-user-dto';
import { UserModel } from 'user/user.model';
import { UserService } from 'user/user.service';
import { JwtService } from '@nestjs/jwt';
import { hash, compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(dto: CreateUserDto) {
    const user = await this.validateUser(dto);
    return this.generateToken(user);
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

  private async generateToken(user: UserModel) {
    const payload = {
      email: user.email,
      id: user.id,
      roles: user.roles,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(dto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(dto.email);

    if (!user) {
      throw new UnauthorizedException('Неверный логин или пароль');
    }

    const isPasswordEquals = await compare(dto.password, user.password);

    if (!isPasswordEquals) {
      throw new UnauthorizedException('Неверный логин или пароль');
    }

    return user;
  }
}
