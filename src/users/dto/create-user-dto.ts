import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@yandex.ru',
    description: 'Почта пользователя',
  })
  readonly email: string;
  @ApiProperty({
    example: 'user@yandex.ru',
    description: 'Незашифрованный пароль пользователя',
  })
  readonly password: string;
}
