import { Test, TestingModule } from '@nestjs/testing';
import { RdaService } from './rda.service';

describe('RdaService', () => {
  let service: RdaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RdaService],
    }).compile();

    service = module.get<RdaService>(RdaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
