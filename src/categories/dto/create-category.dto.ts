import { Repository } from 'typeorm';
import { IsNumber, IsOptional, IsNotEmpty, Validate } from 'class-validator';
import { Category } from '../category.entity';
import { CategoryUniqueConstraint } from '../validator/category-unique.constraint';
import { CategoryParentExistsConstraint } from '../validator/category-parent-exists.constraint';

export class CreateCategoryDTO {
  @IsNotEmpty()
  @Validate(CategoryUniqueConstraint, {
    message: 'Category is already exists',
  })
  name: string;

  @IsOptional()
  @IsNumber()
  @Validate(CategoryParentExistsConstraint, {
    message: `Parent category doesn't exists`,
  })
  parent_id: number;

  async toCategory(repository: Repository<Category>) {
    if (this.parent_id) {
      const parentCategory = await repository.findOne(this.parent_id);
      return new Category(this.name, parentCategory);
    }
    return new Category(this.name);
  }
}
