import {
  Controller,
  Body,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  @Post()
  async create(@Body() userDTO: UserDTO) {
    const userExists: User = await this.usersRepository.findOne({
      where: { login: userDTO.login },
    });

    if (userExists) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Email is already registered',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = new User(userDTO.login, userDTO.password);

    return await this.usersRepository.save(user);
  }
}
