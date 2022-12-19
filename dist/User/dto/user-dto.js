"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = exports.CreateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const user_model_1 = require("../entity/user.model");
class CreateUserDto extends user_model_1.User {
}
exports.CreateUserDto = CreateUserDto;
class UpdateUserDto extends (0, mapped_types_1.PartialType)(CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=user-dto.js.map