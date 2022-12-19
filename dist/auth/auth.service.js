"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const auth_model_1 = require("./auth.model");
const mongoose_2 = require("mongoose");
const user_model_1 = require("../User/entity/user.model");
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
let AuthService = class AuthService {
    constructor(AuthModel, userModel, jwtService) {
        this.AuthModel = AuthModel;
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    signUp(dto) {
        const user = new this.userModel(dto);
        return user.save();
    }
    async signinLocal(dto) {
        const user = await this.userModel.findOne({ email: dto.email });
        if (!user)
            throw new common_1.UnauthorizedException('Credentials incorrect');
        if (user.password !== dto.password)
            throw new common_1.UnauthorizedException('Credentials incorrect');
        return this.signUser(user.id, user.email, 'user');
    }
    signUser(userId, email, type) {
        return this.jwtService.sign({
            sub: userId,
            email,
            type: type,
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(auth_model_1.Auth.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_model_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map