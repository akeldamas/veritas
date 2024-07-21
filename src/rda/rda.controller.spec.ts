import { Test, TestingModule } from '@nestjs/testing';
import { RdaController } from './rda.controller';
import { RdaService } from './rda.service';

describe('RdaController', () => {
  let controller: RdaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RdaController],
      providers: [RdaService],
    }).compile();

    controller = module.get<RdaController>(RdaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
