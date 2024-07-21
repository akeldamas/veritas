import { PartialType } from '@nestjs/mapped-types';
import { CreateRdaDto } from './create-rda.dto';

export class UpdateRdaDto extends PartialType(CreateRdaDto) {}
