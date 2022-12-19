import { JwtService } from '@nestjs/jwt';
import { AuthDocument } from './auth.model';
import { AuthDto } from './dto';
import { Model } from 'mongoose';
import { UserDocument } from 'src/User/entity/user.model';
import { CreateUserDto } from 'src/User/dto/user-dto';
export declare class AuthService {
    private AuthModel;
    private userModel;
    private jwtService;
    constructor(AuthModel: Model<AuthDocument>, userModel: Model<UserDocument>, jwtService: JwtService);
    signUp(dto: CreateUserDto): Promise<UserDocument>;
    signinLocal(dto: AuthDto): Promise<string>;
    signUser(userId: number, email: string, type: string): string;
}
