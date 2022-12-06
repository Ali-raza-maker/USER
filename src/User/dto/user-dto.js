"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.UpdateUserDto = exports.CreateUserDto = void 0;
var mapped_types_1 = require("@nestjs/mapped-types");
var user_model_1 = require("../entity/user.model");
var CreateUserDto = /** @class */ (function (_super) {
    __extends(CreateUserDto, _super);
    function CreateUserDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreateUserDto;
}(user_model_1.User));
exports.CreateUserDto = CreateUserDto;
var UpdateUserDto = /** @class */ (function (_super) {
    __extends(UpdateUserDto, _super);
    function UpdateUserDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateUserDto;
}((0, mapped_types_1.PartialType)(CreateUserDto)));
exports.UpdateUserDto = UpdateUserDto;
