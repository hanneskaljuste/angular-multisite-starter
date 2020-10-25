import { Test, TestingModule } from '@nestjs/testing';
import { SiteFeatureController } from './site-feature.controller';

describe('SiteFeatureController', () => {
  let controller: SiteFeatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteFeatureController],
    }).compile();

    controller = module.get<SiteFeatureController>(SiteFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
