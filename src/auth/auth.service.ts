import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'user/dto/create-user-dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor() {}

  async login(dto: CreateUserDto) {
    console.log('');
  }

  async registration(dto: CreateUserDto) {}
}
