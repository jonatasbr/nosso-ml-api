import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { getRepository } from 'typeorm';
import { User } from '../user.entity';

@ValidatorConstraint({ name: 'unique-login', async: true })
export class UserUniqueLoginConstraint implements ValidatorConstraintInterface {
  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const repository = getRepository(User);
    const user = await repository.findOne({ login: value });
    return user === undefined;
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    return 'login is already exists';
  }
}
