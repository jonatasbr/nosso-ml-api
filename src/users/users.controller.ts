import { Controller, Body, Post, HttpStatus, HttpCode } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() userDTO: CreateUserDTO) {
    const user = new User(userDTO.login, userDTO.password);

    await this.usersRepository.save(user);
  }
}
