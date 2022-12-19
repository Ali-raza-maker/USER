import { CreateUserDto } from 'src/User/dto/user-dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(dto: CreateUserDto): Promise<import("../User/entity/user.model").UserDocument>;
    signinLocal(dto: AuthDto): Promise<string>;
    getUserByTokken(req: any): any;
}
