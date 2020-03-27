import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    CategoriesModule,
    AuthModule,
    ProductsModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
