import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/User/dto/user-dto';
import { JwtAuthGuard } from 'src/utils/guards/jwt-guard.guard';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  signUp(@Body() dto: CreateUserDto) {
    return this.authService.signUp(dto);
  }

  @Post('signin')
  signinLocal(@Body() dto: AuthDto) {
    return this.authService.signinLocal(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  getUserByTokken(@Req() req: any): any {
    return {
      email: req.user.email,
      id: req.user.sub,
      type: req.user.type,
    };
  }
}
