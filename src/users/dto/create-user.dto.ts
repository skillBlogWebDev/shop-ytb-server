import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Ivan' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'ivan123' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'ivan@gmail.com' })
  @IsNotEmpty()
  readonly email: string;
}
