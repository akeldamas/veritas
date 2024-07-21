import { Module } from '@nestjs/common';
import { RdaService } from './rda.service';
import { RdaController } from './rda.controller';

@Module({
  controllers: [RdaController],
  providers: [RdaService],
})
export class RdaModule {}
