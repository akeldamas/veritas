import { Module } from '@nestjs/common';
import { RdaService } from './rda.service';
import { RdaController } from './rda.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pathway } from './entities/pathway.entity';
import GORCAttribute from './entities/gorc-attribute.entity';
import GORCElement from './entities/gorc-element.entity';
import ResourceType from './entities/resource-type.entity';
import WorkingGroup from './entities/working-group.entity';
import InterestGroup from './entities/interest-group.entity';
import Domain from './entities/domain.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Domain,
      GORCElement,
      GORCAttribute,
      InterestGroup,
      Pathway,
      ResourceType,
      WorkingGroup,
    ]),
  ],
  controllers: [RdaController],
  providers: [RdaService],
})
export class RdaModule {}
