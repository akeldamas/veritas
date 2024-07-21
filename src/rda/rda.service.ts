import { Injectable } from '@nestjs/common';
import { CreateRdaDto } from './dto/create-rda.dto';
import { UpdateRdaDto } from './dto/update-rda.dto';

@Injectable()
export class RdaService {
  create(createRdaDto: CreateRdaDto) {
    return 'This action adds a new rda';
  }

  findAll() {
    return `This action returns all rda`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rda`;
  }

  update(id: number, updateRdaDto: UpdateRdaDto) {
    return `This action updates a #${id} rda`;
  }

  remove(id: number) {
    return `This action removes a #${id} rda`;
  }
}
