import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as jwt from 'jsonwebtoken';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class AuthService {
  private readonly jwtSecret: string = process.env.SECRET_KEY || 'your-secret-key';

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  generateToken(user: any): string {
    return jwt.sign(user, this.jwtSecret, { expiresIn: '1h' });
  }

  verifyToken(token: string): any {
    return jwt.verify(token, this.jwtSecret);
  }

  async signup(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  async login(email: string, password: string): Promise<{ token: string } | null> {
    const user = await this.userModel.findOne({ where: { email } });
    if (user && user.password === password) {
      const token = this.generateToken({ id: user.id, email: user.email });
      return { token };
    }
    return null;
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
