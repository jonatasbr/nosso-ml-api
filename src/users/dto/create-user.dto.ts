import { IsEmail, IsNotEmpty, MinLength, Validate } from 'class-validator';
import { UserUniqueLoginConstraint } from '../validator/user-unique-login.constraint';

export class CreateUserDTO {
  @Validate(UserUniqueLoginConstraint, {
    message: 'Email is already exists',
  })
  @IsEmail()
  login: string;

  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
