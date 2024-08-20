import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as jwt from 'jsonwebtoken';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly jwtSecret: string = process.env.SECRET_KEY || 'your-secret-key';

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private jwtservice: JwtService
  ) {}

  generateToken(user: any): string {
    return this.jwtservice.sign(user); // Use JwtService to sign the token
  }

  verifyToken(token: string): any {
    return this.jwtservice.verify(token); // Use JwtService to verify the token
  }

  async signup(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  async login(email: string, password: string): Promise<{ message: string; token?: string }> {
    const user = await this.userModel.findOne({ where: { email } });

    if (user && user.password === password) {
      const payload = { email: user.email, sub: user.id, roles: user.role }; // Include roles in payload
      const token = this.generateToken(payload);
      return { message: 'Login successful', token };
    }

    return { message: 'Invalid credentials' };
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userModel.update(updateUserDto, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    if (user) {
      await user.destroy();
    }
  }
}
