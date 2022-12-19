"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrentUserById = void 0;
const common_1 = require("@nestjs/common");
exports.GetCurrentUserById = (0, common_1.createParamDecorator)((data, ctx) => {
    var _a;
    const request = ctx.switchToHttp().getRequest();
    return (_a = request.user) === null || _a === void 0 ? void 0 : _a.sub;
});
//# sourceMappingURL=get-user-by-id.decorator.js.map