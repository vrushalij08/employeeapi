import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository:Repository<User>
    ){}
  create(createUserDto: CreateUserDto) {
    console.log(createUserDto)
   return this.repository.save(createUserDto)
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({id});
  }

  findOneEmail(email: any) {
    return this.repository.findOneBy({email});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update(id,updateUserDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
