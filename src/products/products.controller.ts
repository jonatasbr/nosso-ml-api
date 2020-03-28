import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * testando requisição logada
 */
@UseGuards(AuthGuard('jwt'))
@Controller('products')
export class ProductsController {
  @Get()
  index() {
    return 'produtos';
  }
}
