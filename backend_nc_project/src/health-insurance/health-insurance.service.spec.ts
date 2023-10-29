import { Test, TestingModule } from '@nestjs/testing';
import { HealthInsuranceService } from './health-insurance.service';

describe('HealthInsuranceService', () => {
  let service: HealthInsuranceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthInsuranceService],
    }).compile();

    service = module.get<HealthInsuranceService>(HealthInsuranceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
