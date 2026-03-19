import { Post, Body, Controller, Res, BadRequestException, UseGuards, Get, Req, Query } from "@nestjs/common";
import { AuthService } from './auth.service';
import { AdminGuard } from './admin.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import type { Response, Request } from "express";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  async login(
    @Body() body: any,
    @Res({ passthrough: true }) res: Response
  ) {
    const { email, password } = body;
    const result = await this.authService.login(email, password);

    res.cookie('token', result.token, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
    });

    return { message: 'Login successful', ...result };
  }

  @Get('logout')
  async logoutGet(@Res() res: Response, @Query('redirect') redirect: string) {
    res.cookie('token', '', {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      expires: new Date(0),
    });
    // Redirect back to frontend if provided, else default to login
    return res.redirect(redirect || 'http://localhost:3001/login');
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    // Explicitly set cookie in the past to ensure it's removed across all browsers
    res.cookie('token', '', {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      expires: new Date(0),
    });
    return { message: 'Logout successful' };
  }

  @Get('test')
  test() {
    return { message: 'Auth controller is working' };
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async me(@Req() req: Request) {
    return { message: 'Authorized', user: (req as any).user };
  }

  @Post('register')
  async register(@Body() body: any) {
    const { name, email, password, role } = body;

    if (!name || !email || !password || !role) {
      throw new BadRequestException('All fields are required');
    }

    return this.authService.register(name, email, password, role);
  }

  @Post('create-staff')
  @UseGuards(AdminGuard)
  async createStaff(@Body() body: any) {
    const { name, email, password, role } = body;

    if (!name || !email || !password || !role) {
      throw new BadRequestException('Required fields missing');
    }

    return this.authService.createStaffWithUser({
      name,
      email,
      password,
      role
    });
  }
}
