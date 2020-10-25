import { Test, TestingModule } from '@nestjs/testing';
import { SiteFeatureService } from './site-feature.service';

describe('SiteFeatureService', () => {
  let service: SiteFeatureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiteFeatureService],
    }).compile();

    service = module.get<SiteFeatureService>(SiteFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
