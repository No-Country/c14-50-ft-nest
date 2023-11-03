import { Test, TestingModule } from '@nestjs/testing';
import { HealthInsuranceController } from './health-insurance.controller';

describe('HealthInsuranceController', () => {
  let controller: HealthInsuranceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthInsuranceController],
    }).compile();

    controller = module.get<HealthInsuranceController>(HealthInsuranceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
