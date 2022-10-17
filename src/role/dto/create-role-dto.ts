import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({
    example: 'ADMIN',
    description: 'Уникальное название для роли на латинице',
  })
  readonly value: string;

  @ApiProperty({
    example: 'Администратор',
    description: 'Описание роли на русском языке',
  })
  readonly decription: string;
}
