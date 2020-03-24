import { Injectable } from '@nestjs/common';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  /**
   *
   * @param repository
   * @param categoryDTO
   */
  async saveCategory(
    repository: Repository<Category>,
    categoryDTO: CreateCategoryDTO,
  ) {
    if (categoryDTO.parent_id) {
      const parentCategory = await repository.findOne(categoryDTO.parent_id);
      return repository.save(new Category(categoryDTO.name, parentCategory));
    }
    return repository.save(new Category(categoryDTO.name));
  }
}
