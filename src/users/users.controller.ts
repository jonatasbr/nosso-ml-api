import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getIndex(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async getShow(@Param('id') id): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Post()
  create(@Body() user: User) {
    return this.userService.create(user);
  }
}
