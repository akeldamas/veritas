import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RdaService } from './rda.service';
import { CreateRdaDto } from './dto/create-rda.dto';
import { UpdateRdaDto } from './dto/update-rda.dto';

@Controller('rda')
export class RdaController {
  constructor(private readonly rdaService: RdaService) {}

  @Post()
  create(@Body() createRdaDto: CreateRdaDto) {
    return this.rdaService.create(createRdaDto);
  }

  @Get()
  findAll() {
    return this.rdaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rdaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRdaDto: UpdateRdaDto) {
    return this.rdaService.update(+id, updateRdaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rdaService.remove(+id);
  }
}
