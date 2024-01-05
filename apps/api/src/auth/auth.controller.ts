import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { SignupInput } from './dto/signup.input';
import { RefreshTokenInput } from './dto/refresh-token.input';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() signupData: SignupInput) {
    signupData.email = signupData.email.toLowerCase();
    const { accessToken, refreshToken } = await this.authService.createUser(
      signupData,
    );
    return { accessToken, refreshToken };
  }

  @Post('login')
  async login(@Body() loginData: LoginInput) {
    const { accessToken, refreshToken } = await this.authService.login(
      loginData.email.toLowerCase(),
      loginData.password,
    );
    return { accessToken, refreshToken };
  }

  @Post('refresh-token')
  async refreshToken(@Body() refreshTokenData: RefreshTokenInput) {
    return this.authService.refreshToken(refreshTokenData.token);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getUser(@Req() req) {
    return this.authService.validateUser(req.user.id);
  }
}
