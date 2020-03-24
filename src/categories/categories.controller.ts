import { InjectRepository } from '@nestjs/typeorm';
import { Controller, Post, HttpCode, HttpStatus, Body } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoriesController {
  constructor(
    @InjectRepository(Category)
    private repository: Repository<Category>,
    private readonly categoryService: CategoryService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() categoryDTO: CreateCategoryDTO) {
    this.categoryService.saveCategory(this.repository, categoryDTO);
  }
}
