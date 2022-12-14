import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Auth, AuthDocument } from './auth.model';
import { AuthDto } from './dto';
import { Model } from 'mongoose';
// import { User } from 'src/User/userInterface';
import { User, UserDocument } from 'src/User/entity/user.model';
import { CreateUserDto } from 'src/User/dto/user-dto';

// eslint-disable-next-line
// const users = require('../newUser.json');

const users = [
  {
    id: 1,
    email: 'vlad@gmail.com',
    password: '123',
  },
  {
    id: 2,
    email: 'aliraza@gmail.com',
    password: '123',
  },
];

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name)
    private AuthModel: Model<AuthDocument>,
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  signUp(dto: CreateUserDto): Promise<UserDocument> {
    const user = new this.userModel(dto);
    return user.save();
  }

  async signinLocal(dto: AuthDto) {
    // retrieve user
    const user = await this.userModel.findOne({ email: dto.email });
    if (!user) throw new UnauthorizedException('Credentials incorrect');
    if (user.password !== dto.password)
      throw new UnauthorizedException('Credentials incorrect');

    return this.signUser(user.id, user.email, 'user');
  }

  signUser(userId: number, email: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      email,
      type: type,
    });
  }
}
