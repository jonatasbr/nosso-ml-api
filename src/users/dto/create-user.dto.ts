import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsEmail()
  login: string;

  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
