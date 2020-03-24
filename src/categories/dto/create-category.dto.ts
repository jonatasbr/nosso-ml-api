import { IsNumber, IsOptional, IsNotEmpty, Validate } from 'class-validator';
import { CategoryUniqueConstraint } from '../validator/category-unique.constraint';

export class CreateCategoryDTO {
  @Validate(CategoryUniqueConstraint, {
    message: 'Category is already exists',
  })
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNumber()
  parent_id: number;
}
