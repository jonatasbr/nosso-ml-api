import { Injectable } from '@nestjs/common';
import { FindConditions } from 'typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}

  async create(user: User) {
    const { id, login, createdAt, updatedAt } = await this.usersRepository.save(
      user,
    );
    return { id, login, createdAt, updatedAt };
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
