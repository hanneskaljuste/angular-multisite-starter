import { Test, TestingModule } from '@nestjs/testing';
import { SiteConfigurationController } from './site-configuration.controller';

describe('SiteConfigurationController', () => {
  let controller: SiteConfigurationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteConfigurationController],
    }).compile();

    controller = module.get<SiteConfigurationController>(SiteConfigurationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
