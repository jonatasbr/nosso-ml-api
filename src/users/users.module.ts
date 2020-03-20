import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from '../users/users.controller';
import { UsersService } from '../users/users.service';
import { UserRepository } from './user.repository';
import { UsersSubscriber } from './users.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UsersService, UsersSubscriber],
  controllers: [UsersController],
  exports: [TypeOrmModule],
})
export class UsersModule {}
