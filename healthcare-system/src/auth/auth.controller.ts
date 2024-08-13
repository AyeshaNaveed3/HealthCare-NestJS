import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    const { email, password } = loginDto;
    const result = await this.authService.login(email, password);
    if (result) {
      return { message: 'Login successful', token: result.token };
    }
    return { message: 'Invalid credentials' };
  }

  @Get()
  async findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.authService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.authService.remove(id);
  }
}
