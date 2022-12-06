import { PartialType } from '@nestjs/mapped-types';
import { User } from '../entity/user.model';
export class CreateUserDto extends User {}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
