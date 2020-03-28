import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Controller('')
export class AuthController {
  constructor(private readonly jwt: JwtService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async signin(@Request() request) {
    const payload = {
      username: request.user.login,
      sub: request.user.id,
    };
    return { token: this.jwt.sign(payload) };
  }
}
