import { InjectRepository } from '@nestjs/typeorm';
import { Controller, Post, HttpCode, HttpStatus, Body } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDTO } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(
    @InjectRepository(Category)
    private readonly repository: Repository<Category>,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() categoryDTO: CreateCategoryDTO) {
    const category = await categoryDTO.toCategory(this.repository);
    await this.repository.save(category);
  }
}
