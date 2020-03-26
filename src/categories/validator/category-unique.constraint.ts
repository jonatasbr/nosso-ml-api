import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { getRepository } from 'typeorm';
import { Category } from '../category.entity';

@ValidatorConstraint({ name: 'unique-category', async: true })
export class CategoryUniqueConstraint implements ValidatorConstraintInterface {
  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const repository = getRepository(Category);
    const category = await repository.findOne({ name: value });
    return category === undefined;
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    return 'category is already exists';
  }
}
