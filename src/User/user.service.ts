import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/user-dto';
import { UpdateUserDto } from './dto/user-dto';
import { User, UserDocument } from './entity/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async create(createEmployeeDto: CreateUserDto): Promise<UserDocument> {
    const employee = new this.userModel(createEmployeeDto);
    return employee.save();
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    return this.userModel.findById(id);
  }

  async update(
    id: string,
    updateEmployeeDto: UpdateUserDto,
  ): Promise<UserDocument> {
    return this.userModel.findByIdAndUpdate(id, updateEmployeeDto);
  }

  async remove(id: string) {
    return this.userModel.findByIdAndRemove(id);
  }
}
